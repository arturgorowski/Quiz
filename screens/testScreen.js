import React, { Component } from "react";
import{ View, Text, StyleSheet, Button} from "react-native";
import { Navigation } from 'react-native-navigation';



class mainScreen extends Component {

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
                <Button style={styles.test} title='test screen' onPress={()=>alert('button pressed')}/>
            
            </View>
        );
    }
}

export default mainScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    test:{

    }
})