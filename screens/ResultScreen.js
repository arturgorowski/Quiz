import React, { Component } from "react";
import{ View, Text, StyleSheet, Button} from "react-native";
import { Navigation } from 'react-native-navigation';



export default class ResultScreen extends Component {

    goToScreen = (screenName) =>{
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
            }
        })
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Result</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    test:{

    }
})