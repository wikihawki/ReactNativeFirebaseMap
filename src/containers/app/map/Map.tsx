import React from "react";
import { Button } from "react-native";
import { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import styles from "./styles";
type Props = { navigation: any };
export default class Map extends Component<Props> {
  render() {
    return (
      <View>
        <Text>Tutaj bedzie mapa</Text>
        <Button
          onPress={() => this.props.navigation.openDrawer()}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
