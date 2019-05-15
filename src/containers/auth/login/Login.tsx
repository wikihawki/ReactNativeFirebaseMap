import React from "react";
import { Component } from "react";
import { Button, Text, View } from "react-native";
import { LoginManager, AccessToken } from "react-native-fbsdk";
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
            LoginManager.logInWithReadPermissions([
              "public_profile",
              "email",
              "user_friends"
            ]).then(
              function(result) {
                if (result.isCancelled) {
                  console.log("Login cancelled");
                } else {
                  console.log(
                    `Login success with permissions: ${result.grantedPermissions.toString()}`
                  );
                  AccessToken.getCurrentAccessToken().then(data => {
                    console.log(data.accessToken.toString());
                  });
                }
              },
              function(error) {
                console.log(`Login fail with error: ${error}`);
              }
            );
          }}
        />
      </View>
    );
  }
}
