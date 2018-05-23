import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import ButtonDangKy from './ButtonDangKy';
import FormDangKy from './FormDangKy';
// import Logo from './Logo';
// import SignupSection from './SignupSection';
import Wallpaper from './Wallpaper';

export default class Register extends Component {
	render() {
		return (
			<Wallpaper>
				<View style={styles.container}>
					<Text style={styles.text}>ĐĂNG KÝ THÀNH VIÊN</Text>
				</View>
				<View style={styles.container2}>
					<View style={styles.FormDangKy}>
						<FormDangKy />
					</View>

					<View style={styles.SignupSection}>
						
					</View>
					{/* <ButtonDangKy /> */}
				</View>
			</Wallpaper>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		
		
	},
	container2: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	FormDangKy: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	SignupSection: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},

	text: {
		color: 'white',
		fontWeight: 'bold',
		backgroundColor: 'transparent',
		// marginTop: 50,
		// marginBottom: 50,
		fontSize: 21,
	},
});

// const DEVICE_WIDTH = Dimensions.get('window').width;
// const DEVICE_HEIGHT = Dimensions.get('window').height;

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		top: 70,
// 		width: DEVICE_WIDTH,
// 		flexDirection: 'row',
// 		justifyContent: 'space-around',
// 	},
// 	text: {
// 		color: 'white',
// 		backgroundColor: 'transparent',
// 	},
// });
