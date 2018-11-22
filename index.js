/** @format */

import { Navigation } from "react-native-navigation";
import { Dimensions } from 'react-native';

import mainScreen from './screens/mainScreen';
import testScreen from './screens/testScreen';
import resultScreen from './screens/resultScreen';

Navigation.registerComponent('mainScreen', () => mainScreen)
Navigation.registerComponent('testScreen', () => testScreen)
Navigation.registerComponent('resultScreen', () => resultScreen)

/*const { width } = Dimensions.get('window');

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar:{
      evelation: 0,
      visible: false,
      drawBehind: true,
      animate: false,
      buttonColor: 'white',
      title: {
        color: 'white',
        alignment: 'center',
        text: 'Home Page'
      },
      background:{
        color: 'transparent'
      }
    }
  });
  Navigation.setRoot({
    root: {
      sideMenu:{
        left:{
          component:{
            id : 'drawerId',
            name: 'Drawer',
            fixedWidth: width
          }
        }
      },
      center:{
        stack:{
          id: 'AppStack',
          children: [
            {
              component: {
                name: 'mainScreen',
              },
            }
          ]
        }
      }
    }
  });
});*/

Navigation.events().registerAppLaunchedListener(() => {
  
  Navigation.setRoot({
    root: {
      stack: {
        id: 'AppStack',
        children: [
          {
            component: {
              name: 'mainScreen',
              options: {
                topBar: {
                  title: { text: 'Home' }
                }
              },
            },
          },
        ]
      }
    }
  });
});



