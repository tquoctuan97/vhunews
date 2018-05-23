import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import RootNavigation from '../navigation/RootNavigation';
import LoginScreen from './LoginScreen';
import QuenMatKau from './QuenMatKau';
import Register from './Register';

export default class Main extends Component {
	render() {
		return (
			<Router>
				<Scene key="root">
					<Scene
						key="loginScreen"
						component={LoginScreen}
						animation="fade"
						hideNavBar={true}
						initial={true}
					/>
					<Scene
						key="RootNavigation"
						component={RootNavigation}
						animation="fade"
						hideNavBar={true}
					/>

					<Scene
						key="quenmatkau"
						component={QuenMatKau}
						animation="fade"
						title="Quenpassword"
					/>
					<Scene
						key="register"
						component={Register}
						hideNavBar={true}
						title="Register"
					/>
				</Scene>
			</Router>
		);
	}
}
