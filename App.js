import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import SignUpLogInScreen from './screens/SignUpLogInScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import { AppTabNavigator } from "./components/AppTabNavigator";

export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  SignUpLogInScreen:{screen: SignUpLogInScreen},
  Drawer: { screen: AppDrawerNavigator },
  BottomTab: { screen: AppTabNavigator }
});

const AppContainer = createAppContainer(switchNavigator);