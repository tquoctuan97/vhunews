import React, { Component } from 'react';
import { Animated, Dimensions, Easing, Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View,Alert } from 'react-native';
import eyeImg from './assets/eye_black.png';
import spinner from './assets/loading.gif';
import passwordImg from './assets/password.png';
import usernameImg from './assets/username.png';
// import {Input} from 'native-base';
import UserInput from './UserInput';
import { firebaseApp } from './firebaseConfig';
import { Actions } from 'react-native-router-flux';

const DEVICE_WIDTH = Dimensions.get('window').width;
// const DEVICE_HEIGHT = Dimensions.get('window').height;
const MARGIN = 40;

export default class FormDangKy extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showPass: true,
			press: false,
			email: '',
			password: '',
		};
		console.log(this.state);
		this.showPass = this.showPass.bind(this);
		this.buttonAnimated = new Animated.Value(0);
		this.growAnimated = new Animated.Value(0);
		this.signupUser = this.signupUser.bind(this);
	}

	showPass() {
		this.state.press === false
			? this.setState({ showPass: false, press: true })
			: this.setState({ showPass: true, press: false });
	}

	signupUser() {
		firebaseApp
			.auth()
			.createUserWithEmailAndPassword(this.state.email, this.state.password)
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
	// signupUser = (email, password) => {
	// 	try {
	// 		if (this.state.password.length < 6) {
	// 			alert('Password hơn 6 chữ');
	// 			return;			}
	// 		firebaseApp.auth().createUserWithEmailAndPassword(email, password);
	// 	} catch (error) {
	// 		console.log(error.toString());
	// 	}
	// };

	// signupUser() {
	// 	if (this.state.isLoading) return;
	// 	this.signupUser(this.state.email, this.state.password);
	// 	this.setState({ isLoading: true });
	// 	Animated.timing(this.buttonAnimated, {
	// 		toValue: 1,
	// 		duration: 200,
	// 		easing: Easing.linear,
	// 	}).start();

	// 	setTimeout(() => {
	// 		this._onGrow();
	// 	}, 2000);

	// 	setTimeout(() => {
	// 		// Actions.secondScreen();

	// 		console.log(this.Dangky);
	// 		this.setState({ isLoading: false });

	// 		this.buttonAnimated.setValue(0);
	// 		this.growAnimated.setValue(0);
	// 	}, 2300);
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
				{/* <UserInput
					source={passwordImg}
					secureTextEntry={this.state.showPass}
					placeholder="Họ và Tên"
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false}
					onChangeText={password => this.setState({ password })}
				/>
				<UserInput
					source={passwordImg}
					secureTextEntry={this.state.showPass}
					placeholder="Mã số sinh viên"
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false}
					onChangeText={password => this.setState({ password })}
				/>
				<UserInput
					source={passwordImg}
					secureTextEntry={this.state.showPass}
					placeholder="Khoa"
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false}
					onChangeText={password => this.setState({ password })}
				/>
				
				<UserInput
					source={passwordImg}
					secureTextEntry={this.state.showPass}
					placeholder="Số điện thoại"
					returnKeyType={'done'}
					autoCapitalize={'none'}
					autoCorrect={false}
					onChangeText={password => this.setState({ password })}
				/>
				 */}
				<TouchableOpacity
					activeOpacity={0.7}
					style={styles.btnEye}
					onPress={this.showPass}
				>
					<Image source={eyeImg} style={styles.iconEye} />
				</TouchableOpacity>
				<View style={styles.container1}>
					<Animated.View style={{ width: changeWidth }}>
						<TouchableOpacity
							style={styles.button}
							onPress={this.signupUser}
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

// const DEVICE_WIDTH = Dimensions.get('window').width;
// const DEVICE_HEIGHT = Dimensions.get('window').height;

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
