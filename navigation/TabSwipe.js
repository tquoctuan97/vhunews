// import React from 'react';
import { StackNavigator } from 'react-navigation';
import Swipe from '../screens/Swipe';

export default  StackNavigator(
	{
		Swipe: { screen: Swipe },
	},
	{
		initialRouteName: 'Swipe',
		// headerMode: "screen"
	}
);
