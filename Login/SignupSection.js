import Dimensions from 'Dimensions';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class SignupSection extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.text} onPress={Actions.register}>Tạo tài khoản</Text>
				<Text style={styles.text} onPress={Actions.quenmatkau}>Quên mật khẩu?</Text>
			</View>
		);
	}
}

const DEVICE_WIDTH = Dimensions.get('window').width;
// const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
	container: {
		flex: 2,
		// top: 100,
		width: DEVICE_WIDTH,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
});
