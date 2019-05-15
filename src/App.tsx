import React, {Component} from "react";
import firebase from"react-native-firebase";
import {Platform, StyleSheet} from "react-native";
import MainRouter from "./routers/MainRouter";

const instructions = Platform.select({
    ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
    android:
        "Double tap R on your keyboard to reload,\n" +
        "Shake or press menu button for dev menu"
});

type Props = {};
export default class App extends Component<Props> {

    getActiveRouteName = (navigationState: any): any => {
        if (!navigationState) {
            return null;
        }
        const route = navigationState.routes[navigationState.index];
        // Dive into nested navigators
        if (route.routes) {
            return this.getActiveRouteName(route);
        }
        return route.routeName;
    }


    render() {
        return <MainRouter     onNavigationStateChange={(prevState, currentState) => {
            const currentScreen = this.getActiveRouteName(currentState);
            const prevScreen = this.getActiveRouteName(prevState);
            if (prevScreen !== currentScreen) {
                console.log("fire event screen",currentScreen )
                firebase.analytics().setCurrentScreen(currentScreen);
            }
        }}/>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
