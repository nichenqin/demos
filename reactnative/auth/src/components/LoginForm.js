import React, { Component } from "react";
import { TextInput } from "react-native";

import Button from "./commom/Button";
import Card from "./commom/Card";
import CardSection from "./commom/CardSection";
import Input from "./commom/Input";

class LoginForm extends Component {
  state = { email: "", password: "" };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            autoFocus
            label="Email"
            placeholder="example@gmail.com"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
