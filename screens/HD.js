import { Container, Icon } from 'native-base';
import React from 'react';
import { FlatList, Image, Platform, Text, TouchableOpacity, View, focused } from 'react-native';
// import GetLink from './GetLink';

export default class HD extends React.Component {
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
		title: 'HOẠT ĐỘNG',
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
		return fetch('http://itcvhu.me/PortalVHU/getHoatDong.php')
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
		const url = 'http://itcvhu.me/PortalVHU/getHoatDong.php';
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
		const { navigate } = this.props.navigation;
		return (
			<Container style={{ backgroundColor: 'white' }}>
				{/* <Header  style={{ backgroundColor: "#0099ff",marginTop: Platform.OS === 'android' ? 24 : null }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}    >
            <Icon style= {{color:"white"}} name={ Platform.OS === 'ios' ? `ios-menu${focused ? '' : '-outline'}` : 'md-menu'} />
            </Button>
          </Left>
          <Body>
            <Title style= {{color:"white"}}>Tin Tức</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.props.navigation.navigate("HoiDap")} >
              <Icon style= {{color:"white"}} name={ Platform.OS === 'ios' ? `ios-chatbubbles${focused ? '' : '-outline'}` : 'md-chatbubbles'} />
            </Button>
          </Right>
        </Header> */}
				<FlatList
					data={this.state.mang}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={{
								borderBottomWidth: 0.2,
								borderBottomColor: '#E0E0E0',
								padding: 5,
							}}
							onPress={() => {
								navigate('GetLink', {
									link: item.LINK,
									tieude: item.TIEUDE,
									linkdemo: 'https://www.facebook.com/sharer/sharer.php?u=',
								});
							}}
						>
							<View
								style={{ flexDirection: 'row', marginTop: 5, marginBottom: 5 }}
							>
								<View
									style={{
										flexDirection: 'column',
										flex: 2,
										paddingRight: 10,
										paddingLeft: 5,
									}}
								>
									<View style={{ flex: 1, marginTop: 5 }}>
										<Text
											style={{
												fontWeight: '100',
												fontSize: 12,
												color: '#9E9E9E',
											}}
										>
											{item.TIME}
										</Text>
										<Text
											style={{
												color: 'black',
												fontWeight: 'bold',
												lineHeight: 20,
												fontSize: 15,
											}}
										>
											{item.TIEUDE}
										</Text>
										{/* <Text>{item.TOMTAT}</Text> */}
									</View>
									<View style={{ flex: 1, justifyContent: 'flex-end' }}>
										<Text
											style={{
												fontWeight: '100',
												fontSize: 12,
												color: '#9E9E9E',
											}}
										>
											{item.AUTHOR}
										</Text>
									</View>
								</View>
								<View style={{ flex: 1 }}>
									<Image
										source={{ uri: item.URL }}
										style={{ flex: 1, width: 125, height: 125 }}
									/>
								</View>
							</View>
						</TouchableOpacity>
					)}
					refreshing={this.state.refreshing}
					onRefresh={this.handleRefresh}
				/>
			</Container>
		);
	}
}
