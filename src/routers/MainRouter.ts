import { createSwitchNavigator, createAppContainer } from "react-navigation";
import HomeRouter from "./HomeRouter";
import Home from "../containers/app/home/Home";

export default createAppContainer(
  createSwitchNavigator({
    HomeRouter,
    Home
  })
);
