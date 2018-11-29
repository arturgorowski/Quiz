import React, { Component } from "react";
import { AsyncStorage, View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { Navigation } from 'react-native-navigation';

import StartingScreen from './StartingScreen';
import MainScreen from './MainScreen';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = { screen: false }
    }

    componentDidMount() {
        this.getStartId();
    }
    setStartId = async () => {
        try {
            await AsyncStorage.setItem('onStartingScreenPage', 'true');

        } catch (error) {
            // Error saving data
        }
    };

    getStartId = async () => {
        try {
            const value = await AsyncStorage.getItem('onStartingScreenPage');
            if (value !== null) {
                Navigation.setStackRoot(this.props.componentId, {
                    component: {
                        name: 'MainScreen'
                    }
                })
            } else {
                this.setState({screen: true})
            }
        } catch (error) {
            console.log(error);
        }


    };

    goToScreen = (screenName) => {
        this.setStartId();
        Navigation.setStackRoot(this.props.componentId, {
            component: {
                name: screenName
            }
        })
    }

    render() {
        return (
                this.state.screen ? <View style={styles.container}>
                <Text>Regulamin</Text>
                <TouchableOpacity style={styles.skip} 
                    onPress={() => this.goToScreen('MainScreen')}>
                    <Text style={styles.text}>Skip</Text>
                </TouchableOpacity>
            </View>: <View/>
        )

    }
}

 const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    skip: {
        justifyContent: 'center',
        backgroundColor: '#99CC33',
        height: '7%',
        width: '30%',
        borderRadius: 100,
    },
    text:{
        fontSize: 25,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});