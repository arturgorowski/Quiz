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
                <Button style={styles.test} title='test #1' 
                        onPress={()=> this.goToScreen('testScreen')}/>
                <Button style={styles.test} title='test #2' 
                        onPress={()=> this.goToScreen('testScreen')}/>
                <Button style={styles.test} title='test #3' 
                        onPress={()=> this.goToScreen('testScreen')}/>
                <Button style={styles.test} title='test #4' 
                        onPress={()=> this.goToScreen('testScreen')}/>
           
                <Button style={styles.result} title='result screen' 
                        onPress={()=> this.goToScreen('resultScreen')}/>
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

    },
    result:{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    }
})