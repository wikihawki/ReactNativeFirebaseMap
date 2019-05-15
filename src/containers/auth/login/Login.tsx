import React from "react";
import { Component } from "react";
import { Button, Text, View } from "react-native";
import FBSDK from "react-native-fbsdk";
import styles from "./styles";

type Props = {};
export default class Login extends Component<Props> {
  render() {
    return (
      <View>
        <Text style={styles.container}>AAAAAA</Text>
        <Button
          title={"Facebook"}
          onPress={() => {
            console.log("CLICK!");
          }}
        />
      </View>
    );
  }
}
