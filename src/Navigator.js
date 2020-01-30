import {createAppContainer, createStackNavigator} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';

const Navigator = createStackNavigator(
{
  Screen1: { screen: Screen1 },
  Screen2: { screen: Screen2 },
},
{
  initialRouteName: 'Screen1',
});

export default Navigator;
