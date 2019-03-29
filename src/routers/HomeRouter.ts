import { createDrawerNavigator } from "react-navigation";
import Home from "../containers/app/home/Home";
import Map from "../containers/app/map/Map";
export default createDrawerNavigator({
  Home: {
    screen: Home
  },
  Map: { screen: Map }
});
