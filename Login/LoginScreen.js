import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Form from './Form';
import Logo from './Logo';
import Wallpaper from './Wallpaper';


export default class LoginScreen extends Component {
	render() {
		return (
			<Wallpaper>
				{/* <Logo />
				<Form /> */}
				{/* <SignupSection /> */}
				{/* <ButtonSubmit /> */}
				<View style={styles.container}>
					<Logo/>
				</View>
				<View style={styles.container2}>
					<View style={styles.FormDangKy}>
						<Form />
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
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	FormDangKy: {
		flex: 2,
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
