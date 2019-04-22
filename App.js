import { SwitchNavigator, createStackNavigator, createSwitchNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation'
import LoadingScreen from './Loading';
import HomeScreen from './Home';
import { db } from './Config/Config'
import SignInScreen from './SignIn';
import ProfileScreen from './Profile';
import AddScreen from './Add';
import ItemScreen from './Item';

const HomeStack = createStackNavigator({
  List: HomeScreen,
  Item: ItemScreen
})

const AppNavigator = createBottomTabNavigator({
  Home: {screen: HomeStack},
  Profile: ProfileScreen,
  New: AddScreen 
})

const AuthNavigator = createStackNavigator({
  SignIn: SignInScreen
})

const InitialNavigator = createSwitchNavigator({
  LoadingStack: LoadingScreen,
  AuthStack : AuthNavigator,
  AppStack: AppNavigator
  },
  {
    initialRouteName: 'LoadingStack'
  }
)

const App = createAppContainer(InitialNavigator)

export default App
