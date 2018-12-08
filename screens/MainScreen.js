import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, AsyncStorage } from "react-native";
import { Navigation } from 'react-native-navigation';

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        names: [
            { 'name': 'Harry Potter', 'id': 1, 'screen': 'HarryPotterTest' },
            { 'name': 'Quiz #2', 'id': 2, 'screen': 'TestScreen' },
            { 'name': 'Quiz #3', 'id': 3, 'screen': 'TestScreen' },
            { 'name': 'Quiz #4', 'id': 4, 'screen': 'TestScreen' },
            { 'name': 'Quiz #5', 'id': 5, 'screen': 'TestScreen' },
            { 'name': 'Results', 'id': 6, 'screen': 'ResultScreen' }
        ]
    }

    goToScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {
                        this.state.names.map((item) => (
                            <View key={item.id}>
                                <TouchableOpacity style={styles.touch} onPress={() => this.goToScreen(item.screen)}>
                                    <Text style={styles.text}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: '#99CC33',
    },
    touch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        margin: 6,
        //borderColor: '#2a4944',
        //borderWidth: 2,
        backgroundColor: '#99CC33',
        borderRadius: 20,
        textAlign: 'center'
    },
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 30,
        fontFamily: "MontSerrat-Medium"
    }
})