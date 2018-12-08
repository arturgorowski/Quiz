import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ListView } from "react-native";
import { Navigation } from 'react-native-navigation';

const quizes = [
    {
        question1: {
            question: "Jak nazywał sie syn Lucjusza Malfoy'a?",
            correctOption: "option4",
            option: {
                option1: "Harry",
                option2: "Ron",
                option3: "Diego",
                option4: "Draco"
            }
        },
        question2: {
            question: "Jak nazywali sie rodzice Harrego?",
            correctOption: "option1",
            option: {
                option1: "James i Lily",
                option2: "George i Honorata",
                option3: "Diego i Lily",
                option4: "Artur i Nimfadora"
            }
        },
        question3: {
            question: "Jakiego przedmiotu uczyła prof McGonagall?",
            correctOption: "option3",
            option: {
                option1: "Wrożbiarstwa",
                option2: "Eliksirów",
                option3: "Transmutacji",
                option4: "Ochrony przed czarną magią"
            }
        },
        question4: {
            question: "Jaką nazwe nosiła pierwsza miotła Harrego?",
            correctOption: "option4",
            option: {
                option1: "Zmiatacz 66",
                option2: "Błyskawica",
                option3: "Nimbus 2001",
                option4: "Nimbus 2000"
            }
        },
        question5: {
            question: "Do którego domu należał Harry?",
            correctOption: "option1",
            option: {
                option1: "Gryffindor",
                option2: "Hufflepuff",
                option3: "Slytherin",
                option4: "Ravenclaw"
            }
        },
    }
];

export default class TestScreen extends Component {
    constructor(props) {
        super(props);

        const dataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: dataSource.cloneWithRows(quizes),
            score: 0,
            pressStatus: false
        };
    }


    goToScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
            }
        })
    };

    finish = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Wynik: {this.state.score}</Text>
            </View>
        )
    }

    answer = (ans) => {
        if (ans === "t1"){
            this.setState(score = score+1);
        }
    }

    _onHideUnderlay() {
        this.setState({ pressStatus: false });
    }
    _onShowUnderlay() {
        this.setState({ pressStatus: true });
    }

  

    render() {
        return (
            /*<ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow.bind(this)}
            //renderRow={(data) => <Row {...data} />}
            />*/
            <View style={{marginTop:100}}><Text style={styles.Text}>jhsfhbshf</Text></View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    text: {
        fontSize: 35
    },
    textAns: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    to: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
        width: 100,
        height: 100
    },
    toClickT: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        width: 100,
        height: 100
    },
    next: {
        flex: 1,
        alignContent: 'flex-end',
        backgroundColor: 'red',
        width: 200,
        height: 100
    }
});