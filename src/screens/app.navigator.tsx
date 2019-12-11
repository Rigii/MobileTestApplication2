  
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createAppContainer, NavigationScreenProp } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
//import  MyDrawerNavigator  from '../../components/drawer_menu/draver_menu'
import { LoginScreen } from './screen.login';
import { ToDo } from './todo.main';
import { UserCamera } from './user.camera'
import { ROUTES } from '../constants/routes' //импорт констант с названиями роутов

const AppNavigator = createStackNavigator(
  {
    [ROUTES.LoginScreen]: LoginScreen,
    [ROUTES.ToDo]: ToDo,
    //[ROUTES.TaskLocation]: TaskLocation,
    [ROUTES.UserCamera]: UserCamera,
    //[ROUTES.UserPlayer]: UserPlayer
  },
  {
    initialRouteName: 'LoginScreen',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(AppNavigator);