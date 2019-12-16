  
import { createAppContainer, NavigationScreenProp } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LoginScreen } from './login/login';
import { TodoList } from './todo-list/todo-list';
import { AddItem } from './add-new-item/add-item'
import { ROUTES } from '../constants/routes'
import { COLORS } from '../constants/theme'

const App = createStackNavigator(
  {
    [ROUTES.LoginScreen]: LoginScreen,
    [ROUTES.TodoList]: TodoList,
    [ROUTES.AddItem]: AddItem
  },
  {
    initialRouteName: ROUTES.LoginScreen,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: COLORS.main,
      },
      headerTintColor: COLORS.head_but,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(App);