import { Body, Button, Card, CardItem, Container, Icon, Left, Right } from 'native-base';
import React, { Component } from 'react';
import { FlatList, Image, Linking, Platform, ScrollView, Text, focused } from 'react-native';

class BanTin extends Component {
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
		title: 'TIN NỔI BẬT',
		headerRight: (
			<Icon
				onPress={() => navigation.navigate({ routeName: 'HoiDap' })}
				name={
					Platform.OS === 'ios'
						? `ios-chatbubbles${focused ? '' : '-outline'}`
						: 'md-chatbubbles'
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
		return fetch('http://itcvhu.me/PortalVHU/getTinNoiBat.php')
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
		const url = 'http://itcvhu.me/PortalVHU/getTinNoiBat.php';
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
			<Container>
				<ScrollView>
					<FlatList
						data={this.state.mang}
						renderItem={({ item }) => (
							<Card>
								{/* <CardItem>
            <Left>
              <Thumbnail source={require("../assets/images/icon.png")} />
              <Body>
                <Text>{item.AUTHOR}</Text>
                <Text note>{item.TIME}</Text>
              </Body>
            </Left>
          </CardItem> */}
								<CardItem
									onPress={() => {
										navigate('GetLink', {
											link: item.LINK,
											tieude: item.TIEUDE,
											linkdemo: 'https://www.facebook.com/sharer/sharer.php?u=',
										});
									}}
									cardBody
								>
									<Image
										source={{ uri: item.URL }}
										style={{ height: 200, width: null, flex: 1 }}
									/>
								</CardItem>
								<CardItem style={{ height: 45 }}>
									<Left>
										<Button
											transparent
											onPress={() => alert('Chạm TIM nhẹ hoy nhen !')}
										>
											<Icon
												style={{ color: 'white' }}
												name="ios-heart-outline"
												// style={{ color: 'black' }}
											/>
										</Button>
										<Button
											transparent
											onPress={() => alert('Chạm CHAT nhẹ hoy nhen !')}
										>
											<Icon
												name="ios-chatbubbles-outline"
												style={{ color: 'black' }}
											/>
										</Button>
										<Button
											transparent
											onPress={() =>
												Linking.openURL(
													'https://www.facebook.com/sharer/sharer.php?u=' +
														item.LINK
												)
											}
											// onPress={() => alert("Chạm Share nhẹ hoy nhen !")}
										>
											<Icon
												style={{ color: 'white' }}
												name="ios-share-alt-outline"
												// style={{ color: 'black' }}
											/>
										</Button>
									</Left>
									<Right>
										<Button
											transparent
											onPress={() => {
												navigate('GetLink', {
													link: item.LINK,
													tieude: item.TIEUDE,
													linkdemo:
														'https://www.facebook.com/sharer/sharer.php?u=',
												});
											}}
										>
											<Text note>{item.TIME}</Text>
										</Button>
									</Right>
								</CardItem>

								{/* <CardItem style={{ height: 20 }}>
            <Text>869 thích </Text>
          </CardItem> */}
								<CardItem>
									<Body>
										<Text
											onPress={() => {
												navigate('GetLink', {
													link: item.LINK,
													tieude: item.TIEUDE,
													linkdemo:
														'https://www.facebook.com/sharer/sharer.php?u=',
												});
											}}
											style={{ fontWeight: '900' }}
										>
											{item.TIEUDE}
										</Text>
										{/* <Text>
                {" "}
                Là sự kiện hằng năm của Khoa Kỹ Thuật - Công Nghệ .Nay được tổ
                chức bởi các thành viên từ Câu lạc bộ Công Nghệ Thông
                Tin(Information Technology Club - ITC) .Với mong muốn mang lại
                cho các sinh viên trường Đại học Văn Hiến nhận được những sự
                giúp đỡ thiết thực về vấn đề sửa chữa phần mềm máy tính xách tay
                với GIÁ HẠT DẺ hay sự tư vấn sử dụng, chọn mua, nâng cấp laptop
                MIỄN PHÍ.{" "}
              </Text>
              <Text>Đến với Ngày hội máy tính, bạn sẽ được:</Text>
              <Text />
              <Text>💡 Sửa chữa máy tính (phần mềm).</Text>
              <Text>💡 Bảo dưỡng máy tính. </Text>
              <Text>💡 Cài đặt phần mềm.</Text>
              <Text>💡 Tư vấn sử dụng laptop đúng cách, hiệu quả.</Text>
              <Text>💡 Tư vấn chọn mua máy tính, điện thoại.</Text> */}
									</Body>
								</CardItem>
							</Card>
						)}
						refreshing={this.state.refreshing}
						onRefresh={this.handleRefresh}
					/>
				</ScrollView>
			</Container>
		);
	}
}
export default BanTin;

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// });
