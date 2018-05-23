import { Body, Card, CardItem, Container, Content, Icon, Input, Item, Text } from 'native-base';
import React from 'react';
import { ListView, Platform, focused } from 'react-native';
// import ThemCauHoi from '../screens/ThemCauHoi';

var CMT = 'http://itcvhu.me/PortalVHU/CommentHoiDap.php';
var POST = 'http://itcvhu.me/PortalVHU/PostComment.php';
// var URL_API = 'http://itcvhu.me/PortalVHU/HoiDap.php';

export default class CommentHoiDap extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		// headerLeft: <Icon
		//     name={Platform.OS === 'ios' ? `ios-menu${focused ? '' : '-outline'}` : 'md-menu'}
		//     style={{ paddingLeft: 20, color:'#fff'}}
		//     onPress={() => navigation.navigate("DrawerOpen")}  />,
		title: (
			<Text style={{ color: '#fff' }}>
				{navigation.state.params.hoidapContent}
			</Text>
		),
		//   headerRight: <Icon
		//  name={ Platform.OS === 'ios' ? `ios-help${focused ? '' : '-outline'}` : 'md-help'}
		//       style={{ paddingRight: 20, color:'#fff' }}
		//       />,
		headerTitleStyle: {
			// textAlign: "center",
			flex: 1,
			fontWeight: 'bold',
			// fontStyle: "italic"
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
			comment: '',
		};
		// this.pushView = this.pushView.bind(this);
		this._postComment = this._postComment.bind(this);
	}
	fetchData(hoidapId) {
		if (hoidapId == '') {
			console.log();
		} else {
			fetch(CMT, {
				method: 'POST',
				body: JSON.stringify({ hoidapId: hoidapId }),
			})
				.then(response => response.json())
				.then(responseData => {
					this.setState({
						dataSource: this.state.dataSource.cloneWithRows(responseData),
					});
				})
				.done();
		}
	}
	componentDidMount() {
		this.fetchData(this.props.navigation.state.params.hoidapId);
	}
	_postComment(cmt, id) {
		if (cmt == '') {
			console.log();
		} else {
			fetch(POST, {
				method: 'POST',
				body: JSON.stringify({ newComment: cmt, hoidapId: id }),
			})
				.then(response => response.json())
				.then(responseData => {
					this.setState({
						dataSource: this.state.dataSource.cloneWithRows(responseData),
						comment: '',
					});
				});
		}
	}
	taoHang(property) {
		return (
			<CardItem bordered>
				<Body>
					<Text>{property.content}</Text>
				</Body>
			</CardItem>
		);
	}

	render() {
		return (
			<Container>
				<Content padder>
					<Card>
						<CardItem header bordered>
							<Text>
								Chủ Đề : {''}
								{this.props.navigation.state.params.hoidapContent}
							</Text>
						</CardItem>

						<ListView
							enableEmptySections={true}
							dataSource={this.state.dataSource}
							renderRow={this.taoHang.bind(this)}
						/>

						<CardItem footer bordered>
							{/* <Left style={{flex:1}}>
              <Item rounded>
                <TextInput placeholder="Viết bình luận" multiline={true} onChangeText={text => this.setState(
                      { comment: text }
                    )} value={this.state.comment} />
              </Item></Left>
              <Right>
              <Button onPress={() => this._postComment(this.state.comment, this.props.navigation.state.params.hoidapId)}>
                <Text>Gửi</Text>
              </Button></Right> */}
							<Item>
								<Input
									rounded
									bordered
									placeholder="Viết bình luận"
									multiline={true}
									onChangeText={text => this.setState({ comment: text })}
									value={this.state.comment}
								/>
								<Icon
									active
									name={
										Platform.OS === 'ios'
											? `ios-send${focused ? '' : '-outline'}`
											: 'md-send'
									}
									onPress={() =>
										this._postComment(
											this.state.comment,
											this.props.navigation.state.params.hoidapId
										)
									}
								/>
							</Item>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}

// <Content padder>
// <View>
// <Text>{this.props.navigation.state.params.hoidapContent}</Text>

// </View>
//   <View><ListView dataSource={this.state.dataSource}
//     renderRow={this.taoHang.bind(this)} />
//    </View>
//    <View>
//    <TextInput multiline = {true}
//    onChangeText = {(text) => this.setState({comment: text})} value = {this.state.comment}/>
//    <Button onPress = {()=>this._postComment(this.state.comment,this.props.navigation.state.params.hoidapId)}>
//    <Text>Gửi</Text>
//    </Button>

//    </View>

// </Content>
