import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import NewScreen from "./src/screens/NewScreen";
import CounterScreen from './src/screens/counterScreen'
import ImageScreen from "./src/screens/ImageScreen";
import ColorScreen from "./src/screens/ColorScreen";
import squareScreen from "./src/screens/SquareScreen";
import TextScreen from "./src/screens/TextScreen";
import BoxScreen from './src/screens/BoxScreen'


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    New:NewScreen,
    Image:ImageScreen,
    Counter: CounterScreen,
    Color:ColorScreen,
    Square: squareScreen,
    Text:TextScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
