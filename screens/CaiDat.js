import { Body, Container, Content, Icon, Left, List, ListItem, Right, Switch, Text } from 'native-base';
import React from 'react';
import { Image, Linking, Platform, focused } from 'react-native';

export default class CaiDat extends React.Component {
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
		title: 'CÀI ĐẶT',
		headerRight: (
			<Icon
				onPress={() => navigation.navigate({ routeName: 'HoiDap' })}
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
	render() {
		return (
			<Container>
				<Content>
					<Image
						source={{
							uri:
								'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png',
						}}
						style={
							{ height: 120, width: '100%' }
							// alignSelf: "stretch",
							// position: "absolute"
						}
					/>
					<Image
						square
						style={{
							height: 80,
							width: 150,
							position: 'absolute',
							alignSelf: 'center',
							top: 20,
						}}
						source={{
							uri: 'http://eoffice.vhu.edu.vn/App/assets/img/VHU_logo.png',
						}}
					/>

					<List>
						<ListItem itemDivider>
							<Text style={{ color: '#09f' }}>Thông Báo</Text>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon
									name={
										Platform.OS === 'ios'
											? `ios-notifications${focused ? '' : '-outline'}`
											: 'md-notifications'
									}
								/>
							</Left>
							<Body>
								<Text>Thông Báo</Text>
							</Body>
							<Right>
								<Switch value />
							</Right>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon
									name={
										Platform.OS === 'ios'
											? `ios-pulse${focused ? '' : '-outline'}`
											: 'md-pulse'
									}
								/>
							</Left>
							<Body>
								<Text>Rung</Text>
							</Body>
							<Right>
								<Switch value />
							</Right>
						</ListItem>
						<ListItem itemDivider>
							<Text style={{ color: '#09f' }}>Liên hệ</Text>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon
									name={
										Platform.OS === 'ios'
											? `ios-people${focused ? '' : '-outline'}`
											: 'md-people'
									}
								/>
							</Left>
							<Body>
								<Text
									onPress={() =>
										Linking.openURL(
											'https://www.messenger.com/t/118380728849917'
										)
									}
								>
									Câu lạc bộ ITC
								</Text>
							</Body>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon
									name={
										Platform.OS === 'ios'
											? `ios-person${focused ? '' : '-outline'}`
											: 'md-person'
									}
								/>
							</Left>
							<Body>
								<Text
									onPress={() =>
										Linking.openURL('https://www.messenger.com/t/thanh.phat.97')
									}
								>
									Người phát triển
								</Text>
							</Body>
						</ListItem>
						<ListItem itemDivider>
							<Text style={{ color: '#09f' }}>Tổng Quan</Text>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon
									name={
										Platform.OS === 'ios'
											? `ios-information-circle${focused ? '' : '-outline'}`
											: 'md-information-circle'
									}
								/>
							</Left>
							<Body>
								<Text>Trợ giúp</Text>
							</Body>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon
									name={
										Platform.OS === 'ios'
											? `ios-lock${focused ? '' : '-outline'}`
											: 'md-lock'
									}
								/>
							</Left>
							<Body>
								<Text>Chính sách bảo mật</Text>
							</Body>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon
									name={
										Platform.OS === 'ios'
											? `ios-bookmarks${focused ? '' : '-outline'}`
											: 'md-person'
									}
								/>
							</Left>
							<Body>
								<Text>Điều khoản Dịch vụ</Text>
							</Body>
						</ListItem>
						<ListItem icon>
							<Left>
								<Icon
									name={
										Platform.OS === 'ios'
											? `ios-exit${focused ? '' : '-outline'}`
											: 'md-exit'
									}
								/>
							</Left>
							<Body>
								<Text>Đăng xuất</Text>
							</Body>
						</ListItem>
					</List>
				</Content>
			</Container>
		);
	}
}

{
	/* <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={ data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          /> */
}
