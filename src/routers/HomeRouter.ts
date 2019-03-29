import { createDrawerNavigator } from "react-navigation";
import App from "../App";
import Home from "../containers/app/home/Home";

export default createDrawerNavigator({
  Home: {
    screen: Home
  },
  Map: { screen: Home }
});
