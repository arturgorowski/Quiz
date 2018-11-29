import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Navigation } from 'react-native-navigation';

export default class MainScreen extends Component {
    constructor(props) {
        super(props);
        
    }

    state = {
        names: [
            { 'name': 'Quiz #1', 'id': 1, 'test': 'TestScreen' },
            { 'name': 'Quiz #2', 'id': 2, 'test': 'TestScreen' },
            { 'name': 'Quiz #3', 'id': 3, 'test': 'TestScreen' },
            { 'name': 'Quiz #4', 'id': 4, 'test': 'TestScreen' },
            { 'name': 'Quiz #5', 'id': 5, 'test': 'TestScreen' },
            { 'name': 'Wyniki', 'id': 6, 'test': 'ResultScreen' }
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

                                <TouchableOpacity style={styles.touch} onPress={() => this.goToScreen(item.test)}>
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
        height: 200,
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
        
    }
})