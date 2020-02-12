import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createStack, headerStyles } from "./config";
import TabNavigation from "./TabNavigation";
import DetailScreen from "../screens/Detail";

const MainNavigation = createStackNavigator(
  {
    Tabs: {
      screen: TabNavigation,
      navigationOptions: {
        headerShown: false,
        headerBackTitleVisible: false
      }
    },
    Detail: {
      screen: DetailScreen,
      navigationOptions: {
        ...headerStyles,
        headerBackTitleVisible: false
      }
    }
  },
  {}
);

export default createAppContainer(MainNavigation);
