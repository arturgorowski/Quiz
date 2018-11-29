/** @format */

import { Navigation } from 'react-native-navigation';
import { Dimensions } from 'react-native';

import MainScreen from './screens/MainScreen';
import TestScreen from './screens/TestScreen';
import ResultScreen from './screens/ResultScreen';
import SplashScreen from './screens/SplashScreen';
import StartingScreen from './screens/StartingScreen';

const { width } = Dimensions.get('window');
const Drawer = require('./screens/Drawer');

Navigation.registerComponent('MainScreen', () => MainScreen)
Navigation.registerComponent('TestScreen', () => TestScreen)
Navigation.registerComponent('ResultScreen', () => ResultScreen)
Navigation.registerComponent('Drawer', () => Drawer)
Navigation.registerComponent('SplashScreen', () => SplashScreen)
Navigation.registerComponent('StartingScreen', () => StartingScreen)

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
                  name: 'SplashScreen'
                }
              },
            ]
          }
        }
      },
    }
  });
});



