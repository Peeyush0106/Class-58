import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from '../components/Header';

export default class App extends Component {
    goToBuzzerScreen = (buzzerColor) => {
        // switch screens
        var textColor = "white";
        if (buzzerColor === "yellow") textColor = "black";
        
        this.props.navigation.navigate("buzzer", { color: buzzerColor, txtColor: textColor });
    }
    render() {
        return (
            <View>
                <Header />
                <View >
                    <TouchableOpacity style={[styles.teamBtn, { backgroundColor: "red" }]} onPress={() => { this.goToBuzzerScreen("red") }}>
                        <Text style={[styles.btnTxt, { color: "white" }]}>Join</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.teamBtn, { backgroundColor: "blue" }]} onPress={() => { this.goToBuzzerScreen("blue") }}>
                        <Text style={[styles.btnTxt, { color: "white" }]}>Join</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.teamBtn, { backgroundColor: "yellow" }]} onPress={() => { this.goToBuzzerScreen("yellow") }}>
                        <Text style={[styles.btnTxt, { color: "black" }]}>Join</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.teamBtn, { backgroundColor: "green" }]} onPress={() => { this.goToBuzzerScreen("green") }}>
                        <Text style={[styles.btnTxt, { color: "white" }]}>Join</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    teamBtn: {
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 20,
        borderWidth: 1,
        width: 100,
        marginTop: 50
    },
    btnTxt: {
        fontSize: 40
    }
});
