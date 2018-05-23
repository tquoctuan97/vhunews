// import React from 'react';
import { StackNavigator } from 'react-navigation';
import CommentHoiDap from '../screens/CommentHoiDap.js';
import GuiCauHoi from '../screens/GuiCauHoi.js';
import HoiDap from '../screens/HoiDap.js';

export default  StackNavigator(
	{
		GuiCauHoi: { screen: GuiCauHoi },
		HoiDap: { screen: HoiDap },
		CommentHoiDap: { screen: CommentHoiDap },
	},
	{
		initialRouteName: 'HoiDap',
		headerMode: 'screen',
	}
);
