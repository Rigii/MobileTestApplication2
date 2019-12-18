  
import { createAppContainer, NavigationScreenProp } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { LoginScreen } from './login/login'
import { TodoList } from './todo-list/todo-list'
import { AddItem } from './add-new-item/add-item'
import { DisplayItemData } from './display-item-data/display-item-data'
import { UserCamera } from './camera/user.camera'
import { ROUTES } from '../constants/routes'
import { COLORS } from '../constants/theme'

const App = createStackNavigator(
  {
    [ROUTES.LoginScreen]: LoginScreen,
    [ROUTES.TodoList]: {
      screen: TodoList,
      navigationOptions: {
        headerLeft: null
      }
    },
    [ROUTES.AddItem]: AddItem,
    [ROUTES.DisplayItemData]: DisplayItemData,
    [ROUTES.UserCamera]: UserCamera
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