import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import db from "../config";

export default class Buzzer extends Component {
	buzz = async () => {
		await Audio.Sound.createAsync(
			{ uri: 'https://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
			{ shouldPlay: true }
		);
	};
	buttonPress = (btnColor) => {
		var time = new Date().getTime();
		db.ref("Teams/" + btnColor).update({
			isPressed: true,
			timeStamp: time
		});
	}
	render() {
		return (
			<View>
				<TouchableOpacity style={[styles.buzzer, { backgroundColor: this.props.color }]} onPress={() => {
					var buttonColor = this.props.color;
					this.buttonPress(buttonColor);
					this.buzz();
				}
				}>
					<Text style={[styles.press, { color: this.props.txtColor }]}>
						Press me!
					</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	buzzer: {
		alignSelf: "center",
		alignItems: "center",
		borderRadius: 100,
		borderWidth: 1,
		borderColor: "black",
		width: 200,
		height: 200,
		marginTop: 200,
	},
	press: {
		fontSize: 20,
		fontWeight: "bold",
		marginTop: 85
	}
});