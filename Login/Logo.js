import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import logoImg from './assets/logo.png';


export default class Logo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={logoImg} style={styles.image} />
				<Text style={styles.text}>CỔNG THÔNG TIN VĂN HIẾN</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	image: {
		width: 120,
		height: 120,
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		marginTop: 50,
		fontSize: 21,
	},
});
