import { Body, Card, CardItem, Container, Icon, Left, Text, Thumbnail, View } from 'native-base';
import React, { Component } from 'react';
import { FlatList, Image, Platform, focused } from 'react-native';

export default class Swipe extends Component {
	static navigationOptions = ({ navigation }) => ({
		headerLeft: (
			<Icon
				name={
					Platform.OS === 'ios'
						? `ios-menu${focused ? '' : '-outline'}`
						: 'md-menu'
				}
				style={{ paddingLeft: 20, color: '#fff' }}
				onPress={() => navigation.navigate('DrawerOpen')}
			/>
		),
		title: 'VHU NEWS',
		headerRight: (
			<Icon
				onPress={() => navigation.navigate({ routeName: 'TB' })}
				name={
					Platform.OS === 'ios'
						? `ios-notifications${focused ? '' : '-outline'}`
						: 'md-notifications'
				}
				style={{ paddingRight: 20, color: '#fff' }}
			/>
		),
		headerTitleStyle: {
			textAlign: 'center',
			flex: 1,
			fontWeight: 'bold',
			fontStyle: 'italic',
		},
		headerStyle: {
			backgroundColor: '#0099ff',
			elevation: 0,
			shadowOpacity: 0,
		},
		headerTintColor: '#fff',
	});

	constructor(props) {
		super(props);
		this.state = {
			mang: [],
			refreshing: false,
		};
	}
	componentDidMount() {
		this.setState({
			loading: true,
			refreshing: true,
		});
		return fetch('http://itcvhu.me/PortalVHU/getNews.php')
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
					mang: responseJson,
					loading: false,
					refreshing: false,
				});
			});
	}
	makeRemoteRequest = () => {
		const url = 'http://itcvhu.me/PortalVHU/getNews.php';
		this.setState({ loading: true });
		fetch(url)
			.then(response => response.json())
			.then(responseJson => {
				this.setState({
					mang: responseJson,
					loading: false,
					refreshing: false,
				});
			});
	};

	handleRefresh = () => {
		this.setState(
			{
				refreshing: true,
			},
			() => {
				this.makeRemoteRequest();
			}
		);
	};

	render() {
		// const { navigate } = this.props.navigation;
		return (
			<Container>
				<View>
					<FlatList
						data={this.state.mang}
						renderItem={({ item }) => (
							<Card style={{ elevation: 3 }}>
								<CardItem>
									<Left>
										<Thumbnail source={item.image} />
										<Body>
											<Text>dsad</Text>
											<Text note>{item.TIME}</Text>
										</Body>
									</Left>
								</CardItem>
								<CardItem cardBody>
									<Image
										style={{ height: 300, flex: 1 }}
										source={{ uri: item.URL }}
									/>
								</CardItem>
								<CardItem>
									<Icon
										// style={{ color: 'white' }}
										name="heart"
										style={{ color: '#ED4A6A' }}
									/>
									<Text>{item.TIEUDE}</Text>
								</CardItem>
							</Card>
						)}
						refreshing={this.state.refreshing}
						onRefresh={this.handleRefresh}
					/>
				</View>
				{/* <View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
        <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon style= {{color:"white"}} name="arrow-back" />
            <Text>Trượt trái</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            
            <Text>Trượt phải</Text>
            <Icon style= {{color:"white"}} name="arrow-forward" />
          </Button>
          </View> */}
			</Container>
		);
	}
}

// import React from "react";
// import { AppRegistry, View, StatusBar, ListView,Alert } from "react-native";
// import { NavigationActions,TabNavigator } from "react-navigation";
// import {
//   Button, Text, Container, Card, CardItem, Body, Content, Header, Left, Right, Icon, Title, Input, InputGroup, Item, Tab, Tabs, Footer, FooterTab, Label, List, ListItem, Thumbnail, Spinner
// } from "native-base";

// var URL_API = 'http://itcvhu.me/PortalVHU/Category.php';
// var URL = 'http://itcvhu.me/PortalVHU/Sickness.php';
// export default class ThongBao extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       dataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2})
//       };
//     //   this.pushView = this.pushView.bind(this);
//     }

//   fetchData() {
//     return fetch(URL_API, {method: "POST", body: null})
//       .then((response) => response.json())
//       .then((responseData) => {
//         this.setState({
//           dataSource: this.state.dataSource.cloneWithRows(responseData)
//         })
//       })
//       .done()
//   }
//   componentDidMount() {
//     this.fetchData();
//   }
// BanTin(property){
// return(
//   <ListItem onPress={() => this.pushView(property.categoryId, property.categoryName)} >
//     <Thumbnail square size={80} source={{ uri: 'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png' }} />
//     <Body>
//     <Text>{property.categoryName}</Text>
//       <Text note>{property.categoryId}</Text>
//     </Body>
//     {/* <Button
//       transparent
//       onPress={() => this.props.navigation.navigate("NoiDung")}            >
//       <Icon style= {{color:"white"}} name="menu" />
//     </Button> */}
//   </ListItem>
// )}
// //   pushView(id, name) {
// //       fetch(URL, {
// //       method: "POST",
// //       body: JSON.stringify({categoryId: id})    })
// //       .then((response) => response.json())
// //       .then((responseData) => {
// //         this.props.navigator.push({
// //           name: 'sickness',
// //           component: require('./Sickness'),
// //           props: { title: name, sickness: responseData }
// //         });
// //          })
// //       .done()
// //   };

//   render() {
//         return (
//       <Container>
//         <Header>
//           <Left>
//             <Button
//               transparent
//               onPress={() => this.props.navigation.navigate("DrawerOpen")}            >
//               <Icon style= {{color:"white"}} name="menu" />
//             </Button>
//           </Left>
//           <Body>
//             <Title>Thông Báo</Title>
//           </Body>
//           <Right />
//         </Header>
//         <Content >

//           {/* <Spinner animating color='red' />
//           <Spinner color='green' />
//           <Spinner color='blue' /> */}
//           <ListView dataSource={this.state.dataSource}
//             renderRow={this.BanTin.bind(this)} />

//         </Content>
//       </Container>
//     );
//   }
// }
