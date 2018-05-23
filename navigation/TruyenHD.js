// import React from 'react';
import { StackNavigator } from 'react-navigation';
import GetLink from '../screens/GetLink';
import HD from '../screens/HD';

export default  StackNavigator(
	{
		HD: { screen: HD },
		GetLink: { screen: GetLink },
	},
	{
		initialRouteName: 'HD',
		headerMode: 'screen',
	}
);
