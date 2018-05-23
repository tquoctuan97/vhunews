import Expo from 'expo';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import RootNavigation from './navigation/RootNavigation';
import Main from './Login/Main';

export default class App extends React.Component {
	state = {
		isLoadingComplete: false,
	};
	async componentDidMount() {
		await Expo.Font.loadAsync({
			'Roboto': require('./assets/Font/Roboto.ttf'),
			'Roboto_medium': require('./assets/Font/Roboto_medium.ttf'),
		});
		this.setState({ isLoadingComplete: true });
	}

	render() {
		if (!this.state.isLoadingComplete) {
			return <Expo.AppLoading />;
		}
		return (
			<View style={styles.container}>
				{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
				<Main />
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
