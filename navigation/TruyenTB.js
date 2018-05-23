// import React from 'react';
import { StackNavigator } from 'react-navigation';
import GetLink from '../screens/GetLink';
import TB from '../screens/TB';

export default  StackNavigator(
	{
		TB: { screen: TB },
		GetLink: { screen: GetLink },
	},
	{
		initialRouteName: 'TB',
		headerMode: 'screen',
	}
);
