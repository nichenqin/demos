import React, { Component } from "react";
import firebase from "firebase";
import { StyleSheet, Text } from "react-native";

import Button from "./commom/Button";
import Card from "./commom/Card";
import CardSection from "./commom/CardSection";
import Input from "./commom/Input";
import Spinner from "./commom/Spinner";

class LoginForm extends Component {
  state = { email: "", password: "", error: "", loading: false };

  onButtonPress = () => {
    const { email, password } = this.state;

    this.setState({ error: "", loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLogginSuccess)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLogginSuccess)
          .catch(this.onLoginFailed);
      });
  };

  onLogginSuccess = () => {
    this.setState({
      email: "",
      password: "",
      loading: false,
      error: ""
    });
  };

  onLoginFailed = () => {
    this.setState({ error: "Authentication Failed", loading: false });
  };

  renderButton = () => {
    if (this.state.loading) return <Spinner />;

    return <Button onPress={this.onButtonPress}>Login</Button>;
  };

  render() {
    const { email, password, error } = this.state;
    const { errorTextStyle } = styles;

    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="example@gmail.com"
            value={email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={errorTextStyle}>
          {error}
        </Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red",
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default LoginForm;
