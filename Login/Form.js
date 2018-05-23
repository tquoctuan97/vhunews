import { View } from 'native-base';
import React, { Component } from 'react';
import { Alert, Animated, Dimensions, Easing, Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import UserInput from './UserInput';
import eyeImg from './assets/eye_black.png';
import spinner from './assets/loading.gif';
import passwordImg from './assets/password.png';
import usernameImg from './assets/username.png';
import { firebaseApp } from './firebaseConfig';
const DEVICE_WIDTH = Dimensions.get('window').width;
// const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

export default class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPass: true,
			press: false,
			isLoading: false,
			email: '',
			password: '',
		};
		this.showPass = this.showPass.bind(this);
		this.buttonAnimated = new Animated.Value(0);
		this.growAnimated = new Animated.Value(0);
		// this._onPress = this._onPress.bind(this);
		this.loginUser = this.loginUser.bind(this);
	}

	showPass() {
		this.state.press === false
			? this.setState({ showPass: false, press: true })
			: this.setState({ showPass: true, press: false });
	}
	loginUser() {
		firebaseApp
			.auth()
			.signInWithEmailAndPassword(this.state.email, this.state.password)
			.then(() => {
				// console.log();
				// if (this.loginUser(this.state.email, this.state.password)) return;
				// this.loginUser(this.state.email, this.state.password);
				this.setState({ isLoading: true });
				Animated.timing(this.buttonAnimated, {
					toValue: 1,
					duration: 200,
					easing: Easing.linear,
				}).start();

				setTimeout(() => {
					Animated.timing(this.growAnimated, {
						toValue: 1,
						duration: 200,
						easing: Easing.linear,
					}).start();
				}, 2000);

				setTimeout(() => {
					Actions.RootNavigation();
					this.setState({ isLoading: false });
					this.buttonAnimated.setValue(0);
					this.growAnimated.setValue(0);
				}, 2000);
				this.setState({
					email: '',
					password: '',
				});
			})
			.catch(function() {
				Alert.alert(
					'Cảnh báo',
					'Đăng nhập thất bại',
					[
						// {
						// 	text: 'Ask me later',
						// 	onPress: () => Actions.pop(),
						// },
						{ text: 'OK', onPress: () => Actions.refresh() },
						{
							text: 'Hủy',
							onPress: () => Actions.pop(),
							style: 'cancel',
						},
						
					],
					{ cancelable: false }
				);
			});
	}
	// _onPress() {
	// 	// if (this.loginUser(this.state.email, this.state.password)) return;
	// 	// this.loginUser(this.state.email, this.state.password);
	// 	this.setState({ isLoading: true });
	// 	Animated.timing(this.buttonAnimated, {
	// 		toValue: 1,
	// 		duration: 200,
	// 		easing: Easing.linear,
	// 	}).start();

	// 	setTimeout(() => {
	// 		Animated.timing(this.growAnimated, {
	// 			toValue: 1,
	// 			duration: 200,
	// 			easing: Easing.linear,
	// 		}).start();
	// 	}, 2000);

	// 	setTimeout(() => {
	// 		firebaseApp.auth().signOut();
	// 		Actions.secondScreen();
	// 		this.setState({ isLoading: false });
	// 		this.buttonAnimated.setValue(0);
	// 		this.growAnimated.setValue(0);
	// 	}, 2000);
	// }

	// _onGrow() {
	// 	Animated.timing(this.growAnimated, {
	// 		toValue: 1,
	// 		duration: 200,
	// 		easing: Easing.linear,
	// 	}).start();
	// }
	render() {
		const changeWidth = this.buttonAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [DEVICE_WIDTH - MARGIN, MARGIN],
		});
		const changeScale = this.growAnimated.interpolate({
			inputRange: [0, 1],
			outputRange: [1, MARGIN],
		});
		return (
			<KeyboardAvoidingView behavior="padding" style={styles.container}>
				<UserInput
					source={usernameImg}
					placeholder="Tài khoản"
					autoCapitalize={'none'}
					returnKeyType={'done'}
					autoCorrect={false}
					onChangeText={email => this.setState({ email })}
				/>
				<UserInput
					source={passwordImg}
					secureTextEntry={this.state.showPass}
					placeholder="Mật khẩu"
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false}
					onChangeText={password => this.setState({ password })}
				/>
				<TouchableOpacity
					activeOpacity={0.7}
					style={styles.btnEye}
					onPress={this.showPass}
				>
					<Image source={eyeImg} style={styles.iconEye} />
				</TouchableOpacity>
				{/* <View style={styles.container}>
					<Text style={styles.Text} onPress={Actions.register}>Tạo tài khoản</Text>
					<Text style={styles.text} onPress={Actions.quenmatkau}>Quên mật khẩu?</Text>
				</View> */}
				<View style={styles.container1}>
					<Animated.View style={{ width: changeWidth }}>
						<TouchableOpacity
							style={styles.button}
							onPress={this.loginUser}
							activeOpacity={1}
						>
							{this.state.isLoading ? (
								<Image source={spinner} style={styles.image} />
							) : (
								<Text style={styles.text}>ĐĂNG NHẬP</Text>
							)}
						</TouchableOpacity>
						<Animated.View
							style={[styles.circle, { transform: [{ scale: changeScale }] }]}
						/>
					</Animated.View>
				</View>
				<View style={styles.container1}>
					<Animated.View style={{ width: changeWidth }}>
						<TouchableOpacity
							style={styles.button1}
							onPress={Actions.register}
							activeOpacity={1}
						>
							{this.state.isLoading ? (
								<Image source={spinner} style={styles.image} />
							) : (
								<Text style={styles.text}>ĐĂNG KÝ</Text>
							)}
						</TouchableOpacity>
						<Animated.View
							style={[styles.circle, { transform: [{ scale: changeScale }] }]}
						/>
					</Animated.View>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	btnEye: {
		position: 'absolute',
		top: 66,
		right: 28,
	},
	iconEye: {
		width: 25,
		height: 25,
		tintColor: 'rgba(0,0,0,0.2)',
	},
	container1: {
		flex: 1,
		top: -0,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#0099ff',
		height: MARGIN,
		borderRadius: 20,
		zIndex: 100,
	},
	button1: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#090',
		height: MARGIN,
		borderRadius: 20,
		zIndex: 100,
	},
	circle: {
		height: MARGIN,
		width: MARGIN,
		marginTop: -MARGIN,
		borderWidth: 1,
		borderColor: '#0099ff',
		borderRadius: 100,
		alignSelf: 'center',
		zIndex: 99,
		backgroundColor: '#0099ff',
	},

	text: {
		color: 'white',
		backgroundColor: 'transparent',
	},
	image: {
		width: 24,
		height: 24,
	},
	input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: DEVICE_WIDTH - 40,
		height: 40,
		marginHorizontal: 20,
		paddingLeft: 45,
		borderRadius: 20,
		color: '#ffffff',
	},
	inputWrapper: {
		flex: 1,
	},
	inlineImg: {
		position: 'absolute',
		zIndex: 99,
		width: 22,
		height: 22,
		left: 35,
		top: 9,
	},
});

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		alignItems: 'center',
// 	},
// 	btnEye: {
// 		position: 'absolute',
// 		top: 66,
// 		right: 28,
// 	},
// 	iconEye: {
// 		width: 25,
// 		height: 25,
// 		tintColor: 'rgba(0,0,0,0.2)',
// 	},
// 	container2: {
// 		flex: 2,
// 		// top: 100,
// 		width: DEVICE_WIDTH,
// 		flexDirection: 'row',
// 		justifyContent: 'space-around',
// 	},
// 	text: {
// 		color: 'white',
// 		backgroundColor: 'transparent',
// 	},
// });
