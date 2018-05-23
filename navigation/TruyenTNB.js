// import React from 'react';
import { StackNavigator } from 'react-navigation';
import GetLink from '../screens/GetLink';
import TinNoiBat from '../screens/TinNoiBat';

export default  StackNavigator(
	{
		TinNoiBat: { screen: TinNoiBat },
		GetLink: { screen: GetLink },
	},
	{
		initialRouteName: 'TinNoiBat',
		headerMode: 'screen',
	}
);
