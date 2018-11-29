const React = require('react');
const { Component } = require('react');

const { View, Text, TouchableOpacity } = require('react-native');

const { Navigation } = require('react-native-navigation');

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    
   
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
      <View style={styles.root}>
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
      </View>
    );
  }


}
module.exports = Drawer;

const styles = {
  root: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff'
  },
  test: {

  },
  result: {

  }
};