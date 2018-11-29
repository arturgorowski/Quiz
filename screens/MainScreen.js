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
                        this.state.names.map((item, index) => (
                            <View key={item.id} style={styles.item}>
                                <TouchableOpacity style={styles.result} onPress={() => this.goToScreen(item.test)}>
                                    <Text style={styles.text}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                </ScrollView>
            </View>
            /*<View style={styles.container}>

                <TouchableOpacity style={styles.test}
                    onPress={() => this.goToScreen('TestScreen')}>
                    <Text>test #1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.test}
                    onPress={() => this.goToScreen('TestScreen')}>
                    <Text>test #2</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.test}
                    onPress={() => this.goToScreen('TestScreen')}>
                    <Text>test #1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.test}
                    onPress={() => this.goToScreen('TestScreen')}>
                    <Text>test #1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.result}
                    onPress={() => this.goToScreen('ResultScreen')}>
                    <Text>Result Screen</Text>
                </TouchableOpacity>

            </View>*/
        );

    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {

    },
    result: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    text: {

    }
})