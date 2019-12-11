  
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createAppContainer, NavigationScreenProp } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation-stack';
//import  MyDrawerNavigator  from '../../components/drawer_menu/draver_menu'
import { LoginScreen } from '../screen-login/screen.login';
import { ROUTES } from '../../constants/routes' //импорт констант с названиями роутов

const navigationOptionsHeader = ({ navigation }: { navigation: NavigationScreenProp<any>}) => { //опции навигации
  return {
    headerLeft: (
      <TouchableOpacity
        style={{ backgroundColor: 'yellow', padding: 15 }}
        onPress={() => navigation.toggleDrawer()}
      >
        <Text style={{ color: 'blue' }}>MENU</Text>
      </TouchableOpacity>
    )
  };
};

const AppNavigator = createStackNavigator(
  {
    [ROUTES.LoginScreen]: LoginScreen,
    [ROUTES.ToDo]: ToDo,
    [ROUTES.TaskLocation]: TaskLocation,
    [ROUTES.UserCamera]: UserCamera,
    [ROUTES.UserPlayer]: UserPlayer
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