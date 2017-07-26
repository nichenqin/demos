import React, { Component } from "react";
import { Text, View } from "react-native";
import firebase from "firebase";

import Header from "./src/components/commom/Header";
import Button from "./src/components/commom/Button";
import CardSection from "./src/components/commom/CardSection";
import Spinner from "./src/components/commom/Spinner";
import LoginForm from "./src/components/LoginForm";

export default class App extends Component {
  state = {
    loggedIn: null
  };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAfeWrmRvkTZU-8TzC4EfmUPXlQWgu6Ygg",
      authDomain: "react-native-auth-b2d74.firebaseapp.com",
      databaseURL: "https://react-native-auth-b2d74.firebaseio.com",
      projectId: "react-native-auth-b2d74",
      storageBucket: "react-native-auth-b2d74.appspot.com",
      messagingSenderId: "125372643280"
    });

    firebase.auth().onAuthStateChanged(user => {
      this.setState({ loggedIn: !!user });
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case null:
        return <Spinner />;
      case true:
        return (
          <CardSection>
            <Button
              onPress={() => {
                firebase.auth().signOut();
              }}
            >
              Log Out
            </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
    }

    return;
  };

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    );
  }
}
