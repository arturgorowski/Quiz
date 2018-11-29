const React = require('react');
const { Component } = require('react');

const { View, Text, TouchableOpacity, ScrollView } = require('react-native');

const { Navigation } = require('react-native-navigation');

class Drawer extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    names: [
      { 'name': 'Home Page', 'id': 7, 'test': 'MainScreen' },
      { 'name': 'Quiz #1', 'id': 1, 'test': 'TestScreen' },
      { 'name': 'Quiz #2', 'id': 2, 'test': 'TestScreen' },
      { 'name': 'Quiz #3', 'id': 3, 'test': 'TestScreen' },
      { 'name': 'Quiz #4', 'id': 4, 'test': 'TestScreen' },
      { 'name': 'Quiz #5', 'id': 5, 'test': 'TestScreen' },
      { 'name': 'Result', 'id': 6, 'test': 'ResultScreen' },
    ]
  }


  goToScreen = (screenName) => {
    console.log("sggsg")
    Navigation.push('MAIN_STACK', {
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

                <TouchableOpacity style={styles.touch} 
                    onPress={() => this.goToScreen(item.test)}>
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
module.exports = Drawer;

const styles = {
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#f5fcff',
    opacity: 0.7,
  },
  touch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 70,
    margin: 6,
    backgroundColor: '#FFFF99',
    borderRadius: 20,
  },
  text:{
    flex: 1,
    fontSize: 20,
    textAlign: 'center'
  }
};