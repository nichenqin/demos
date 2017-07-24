import React, { Component } from "react";
import { Text, View } from "react-native";
import firebase from "firebase";

import Header from "./src/components/commom/Header";

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAfeWrmRvkTZU-8TzC4EfmUPXlQWgu6Ygg",
      authDomain: "react-native-auth-b2d74.firebaseapp.com",
      databaseURL: "https://react-native-auth-b2d74.firebaseio.com",
      projectId: "react-native-auth-b2d74",
      storageBucket: "react-native-auth-b2d74.appspot.com",
      messagingSenderId: "125372643280"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        <Text>An App</Text>
      </View>
    );
  }
}
