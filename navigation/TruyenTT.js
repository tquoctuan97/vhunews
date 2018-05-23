// import React from 'react';
import { StackNavigator } from 'react-navigation';
import GetLink from '../screens/GetLink';
import TT from '../screens/TT';

export default  StackNavigator(
	{
		TT: { screen: TT },
		GetLink: { screen: GetLink },
	},
	{
		initialRouteName: 'TT',
		headerMode: 'screen',
	}
);
