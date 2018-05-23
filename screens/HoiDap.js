import { Container, Content, Icon, List, ListItem, Text } from 'native-base';
import React from 'react';
import { ListView, Platform, focused } from 'react-native';
// import ThemCauHoi from '../screens/ThemCauHoi';

// var URL = 'http://itcvhu.me/PortalVHU/CommentHoiDap.php';
var URL_API = 'http://itcvhu.me/PortalVHU/HoiDap.php';

export default class HoiDap extends React.Component {
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
		title: 'HỎI ĐÁP',
		headerRight: (
			<Icon
				onPress={() => navigation.navigate('GuiCauHoi')}
				name={
					Platform.OS === 'ios'
						? `ios-add-circle${focused ? '' : '-outline'}`
						: 'md-add-circle'
				}
				style={{ paddingRight: 20, color: '#fff' }}
			/>
		),
		headerTitleStyle: {
			textAlign: 'center',
			flex: 1,
			fontWeight: 'bold',
			// fontStyle: 'italic',
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
			dataSource: new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2,
			}),
		};
		// this.pushView = this.pushView.bind(this);
	}
	fetchData() {
		return fetch(URL_API, { method: 'POST', body: null })
			.then(response => response.json())
			.then(responseData => {
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseData),
				});
			})
			.done();
	}
	componentDidMount() {
		this.fetchData();
	}
	taoHang(property) {
		return (
			<List icon>
				<ListItem
					onPress={() =>
						this.pushView(property.hoidapId, property.hoidapContent)
					}
				>
					<Text>{property.hoidapContent}</Text>
				</ListItem>
			</List>
		);
	}
	pushView(id, content) {
		this.props.navigation.navigate('CommentHoiDap', {
			hoidapId: id,
			hoidapContent: content,
		});
	}
	//   themCauHoi(){
	//       this.props.navigator.push({
	//           name: 'themcauhoi',
	//           component: require('./ThemCauHoi'),
	//       })
	//   }

	render() {
		return (
			<Container>
				{/* <Header  style={{ backgroundColor: "#0099ff",marginTop: Platform.OS === 'android' ? 24 : null }}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}    >
            <Icon style= {{color:"white"}} name={ Platform.OS === 'ios' ? `ios-menu${focused ? '' : '-outline'}` : 'md-menu'} />
            </Button>
          </Left>
          <Body>
            <Title style= {{color:"white"}}>Thảo Luận</Title>
          </Body>
          <Right>
            <Button transparent  onPress={() => this.props.navigation.navigate('GuiCauHoi')} >
            <Icon style= {{color:"white"}} name={ Platform.OS === 'ios' ? `ios-send${focused ? '' : '-outline'}` : 'md-send'} />
            </Button>
          </Right>
        </Header> */}
				<Content>
					<ListView
						dataSource={this.state.dataSource}
						renderRow={this.taoHang.bind(this)}
					/>
				</Content>
			</Container>
		);
	}
}
