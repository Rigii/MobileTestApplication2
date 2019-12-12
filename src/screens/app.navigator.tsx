  
import { createAppContainer, NavigationScreenProp } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LoginScreen } from './screen.login';
import { ToDo } from './todo.main';
import { ROUTES } from '../constants/routes' //импорт констант с названиями роутов

const App = createStackNavigator(
  {
    [ROUTES.LoginScreen]: LoginScreen,
    [ROUTES.ToDo]: ToDo
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

export default createAppContainer(App);