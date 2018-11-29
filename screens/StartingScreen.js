import React, { Component } from "react";
import { View, Text, StyleSheet, Button, AsyncStorage } from "react-native";
import { Navigation } from 'react-native-navigation';


export default class StartingScreen extends Component {

    goToScreen = (screenName) =>{
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>TUTORIAL</Text>
                <Button style={styles.skip} title='Skip' 
                    onPress={()=> this.goToScreen('MainScreen')}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    skip:{
        
    }
});