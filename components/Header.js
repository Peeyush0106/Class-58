import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Heading extends Component {
	render() {
		return <Text style={styles.header}>Quiz Buzzer App</Text>;
	}
}

var styles = StyleSheet.create({
	header: {
		fontSize: 50,
		textAlign: 'center',
		color: 'green',
		backgroundColor: 'orange',
	}
});