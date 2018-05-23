import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Main from '../Login/Main';
// import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';
// import LinksScreen from '../screens/LinksScreen';
import CaiDat from '../screens/CaiDat';
// import HomeScreen from '../screens/HomeScreen';
import SideBar from '../screens/SideBar';
import MainTabNavigator from './MainTabNavigator';
import TabSwipe from './TabSwipe';
import TruyenMH from './TruyenMH';
import TruyenTB from './TruyenTB';
import TruyenTNB from './TruyenTNB';
import TruyenTT from './TruyenTT';

const RootStackNavigator = StackNavigator(
	{
		Main: {
			screen: MainTabNavigator,
		},
		'Tin Tức': {
			screen: TruyenTT,
		},
		'Cài Đặt': {
			screen: CaiDat,
		},
		

		'Thông Báo': {
			screen: TruyenTB,
		},
		'Bản Tin': {
			screen: TruyenTNB,
		},

		// 'Thảo Luận': {
		//   screen: TruyenMH,
		// },

		Swiper: {
			screen: TabSwipe,
		},
		'Hỏi Đáp': {
			screen: TruyenMH,
		},
		'Đăng Xuất': {
			screen: Main,
		},
	},
	{
		navigationOptions: () => ({
			header: null,
		}),
	}
);

const TrangChuRouter = DrawerNavigator(
	{
		TrangChu: { screen: RootStackNavigator },
	},
	{
		contentComponent: props => <SideBar {...props}/>,
	}
);

export default class RootNavigator extends React.Component {
	render() {
		return <TrangChuRouter />;
	}
}
