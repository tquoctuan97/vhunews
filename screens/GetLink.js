import { Icon } from 'native-base';
import React, { Component } from 'react';
import { Linking, Platform, Text, WebView, focused } from 'react-native';

export default class GetLink extends Component {
	// static navigationOptions = {

	//     headerRight: (
	//       <Icon
	//         onPress={() => alert('Đã lưu vào yêu thích !')}

	//       />
	//     ),

	//     headerMode: 'screen'
	//   };
	static navigationOptions = ({ navigation }) => ({
		// headerLeft: <Icon
		//     name={Platform.OS === 'ios' ? `ios-menu${focused ? '' : '-outline'}` : 'md-menu'}
		//     style={{ paddingLeft: 20, color:'#fff'}}
		//     onPress={() => navigation.navigate("DrawerOpen")}  />,
		title: (
			<Text style={{ fontSize: 15 }}>{navigation.state.params.tieude}</Text>
		),
		headerRight: (
			<Icon
				onPress={() =>
					Linking.openURL(
						navigation.state.params.linkdemo + navigation.state.params.link
					)
				}
				name={
					Platform.OS === 'ios'
						? `ios-share${focused ? '' : '-outline'}`
						: 'md-share'
				}
				style={{ paddingRight: 20, color: '#fff' }}
			/>
		),
		headerStyle: {
			backgroundColor: '#0099ff',
			elevation: 0,
			shadowOpacity: 0,
		},
		headerTintColor: '#fff',
	});
	// taoHang(property) {
	//   return (
	//     <CardItem bordered>
	//       <Body>
	//         <Text>{property.content}</Text>
	//       </Body>
	//     </CardItem>
	//   );
	// }

	render() {
		// const { navigate } = this.props.navigation;
		var $url = this.props.navigation.state.params.link;
		return <WebView source={{ uri: $url }} />;
	}
}
