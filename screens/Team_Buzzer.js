import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Buzzer from '../components/Buzzer';

export default class App extends Component {
	goToHomeScreen = () => {
        // switch screens        
        this.props.navigation.navigate("home");
    }
	render() {
		return (
			<View>
				<Header />
				<Buzzer color={this.props.navigation.getParam("color")} txtColor={this.props.navigation.getParam("txtColor")} />

				<TouchableOpacity style={styles.backBtn} onPress={() => { this.goToHomeScreen() }}>
					<Text style={styles.backTxt}>
						Back
					</Text>
				</TouchableOpacity>

			</View>
		);
	}
}

const styles = StyleSheet.create({
	backBtn: {
		marginTop: "15%",
		backgroundColor: "black",
		borderRadius: 20,
		alignSelf: "center",
		width: 100,
		alignItems: "center"
	},
	backTxt: {
		color: "white"
	}
});