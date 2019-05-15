import { createDrawerNavigator } from "react-navigation";
import App from "../App";
import Home from "../containers/app/home/Home";
import Login from "../containers/auth/login/Login";

export default createDrawerNavigator({
  Home: {
    screen: Home
  },
  Map: { screen: Home }
});
