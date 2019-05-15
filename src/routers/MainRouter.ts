import { createSwitchNavigator, createAppContainer } from "react-navigation";
import HomeRouter from "./HomeRouter";
import Login from "../containers/auth/login/Login";
export default createAppContainer(
  createSwitchNavigator({
    Login,
    HomeRouter
  })
);
