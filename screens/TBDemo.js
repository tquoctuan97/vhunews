import { Body, Button, Container, Content, Header, Icon, Left, ListItem, Right, Text, Thumbnail, Title } from 'native-base';
import React from 'react';
import { ListView } from 'react-native';

var URL_API = 'http://itcvhu.me/PortalVHU/Category.php';
var URL = 'http://itcvhu.me/PortalVHU/Sickness.php';
export default class ThongBao extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (r1, r2) => r1 !== r2,
			}),
		};
		this.pushView = this.pushView.bind(this);
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
	BanTin(property) {
		return (
			<ListItem
				onPress={() =>
					this.pushView(property.categoryId, property.categoryName)
				}
			>
				<Thumbnail
					square
					size={80}
					source={{
						uri:
							'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png',
					}}
				/>
				<Body>
					<Text>{property.categoryName}</Text>
					<Text note>{property.categoryId}</Text>
				</Body>
			</ListItem>
		);
	}
	pushView(id) {
		fetch(URL, {
			method: 'POST',
			body: JSON.stringify({ categoryId: id }),
		})
			.then(response => response.json())			
			.done();
	}

	render() {
		return (
			<Container>
				<Header>
					<Left>
						<Button
							transparent
							onPress={() => this.props.navigation.navigate('DrawerOpen')}
						>
							<Icon style={{ color: 'white' }} name="menu" />
						</Button>
					</Left>
					<Body>
						<Title>Thông Báo</Title>
					</Body>
					<Right />
				</Header>
				<Content>
					{/* <Spinner animating color='red' />
          <Spinner color='green' />
          <Spinner color='blue' /> */}
					<ListView
						dataSource={this.state.dataSource}
						renderRow={this.BanTin.bind(this)}
					/>
				</Content>
			</Container>
		);
	}
}
