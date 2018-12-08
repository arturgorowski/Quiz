/** @format */

import { Navigation } from 'react-native-navigation';
import { Dimensions } from 'react-native';

import MainScreen from './screens/MainScreen';
import TestScreen from './screens/TestScreen';
import ResultScreen from './screens/ResultScreen';
import RegulationScreen from './screens/RegulationScreen';
import StartingScreen from './screens/StartingScreen';
import HarryPotterTest from './screens/tests/HarryPotterTest'

var React = require('react-native');
var SQLite = require('react-native-sqlite-storage');

const { width } = Dimensions.get('window');
const Drawer = require('./screens/Drawer');

Navigation.registerComponent('MainScreen', () => MainScreen)
Navigation.registerComponent('TestScreen', () => TestScreen)
Navigation.registerComponent('ResultScreen', () => ResultScreen)
Navigation.registerComponent('Drawer', () => Drawer)
Navigation.registerComponent('RegulationScreen', () => RegulationScreen)
Navigation.registerComponent('StartingScreen', () => StartingScreen)
Navigation.registerComponent('HarryPotterTest', () => HarryPotterTest)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      elevation: 0,
      visible: false,
      drawBehind: true,
      animate: false,
      buttonColor: 'white',
      title: {
        color: 'white',
        alignment: 'center'
      },
      background: {
        color: 'transparent'
      }
    }
  });
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            id: 'drawerId',
            name: 'Drawer',
            fixedWidth: width
          }
        },
        center: {
          stack: {
            id: 'MAIN_STACK',
            children: [
             
              {
                component:{
                  name: 'RegulationScreen'
                }
              },
            ]
          }
        }
      },
    }
  });
});



