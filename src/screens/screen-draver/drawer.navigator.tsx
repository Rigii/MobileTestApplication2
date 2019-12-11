import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import TodoMain from '../todo-main/todo.main' 
import MapTaskLocation from '../task-location/task.location'
import UserCamera from '../user-camera/user.camera'
import UserPlayer from '../components/player/user.player.tsx'
const MyDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: TodoMain, //MapTest,
  },
  Location: {
    screen: MapTaskLocation,
  },
  Notifications: {
    screen: UserCamera,
  },
  Player: {
    screen: UserPlayer,
  }
},
  {
    initialRouteName: 'TodoMain'
  }
  );


export default createAppContainer(MyDrawerNavigator);