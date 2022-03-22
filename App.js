import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Home from "./screens/Home";
import Team_Buzzer from "./screens/Team_Buzzer";

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<AppContainer />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 30
	}
});

var AppNavigator = createSwitchNavigator({
	home: Home,
	buzzer: Team_Buzzer
});

var AppContainer = createAppContainer(AppNavigator);