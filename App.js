import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShow from "./src/screens/ResultsShow";
import LoginScreen from "./src/screens/LoginScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Result: ResultsShow,
    Login: LoginScreen,
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

export default createAppContainer(navigator);
