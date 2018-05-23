import Dimensions from 'Dimensions';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class QuenMatKau extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>QuenMatKau</Text>
				
			</View>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
// const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		top: 70,
		width: DEVICE_WIDTH,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
});
