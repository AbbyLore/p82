import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { AppStackNavigator } from './AppStackNavigator'
import RequestScreen from '../screens/RequestScreen';


export const AppTabNavigator = createBottomTabNavigator({
  DonateItems : {
    screen: AppStackNavigator,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/item-list.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Donate Items",
    }
  },
  ItemRequest: {
    screen: RequestScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/item-request.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Item Request",
    }
  }
});