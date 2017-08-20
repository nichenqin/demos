import React, { Component } from "react";
import { Text } from "react-native";
import CardSection from "./common/CardSection";

class ListItem extends Component {
  render() {
    const { titleStyle } = style;

    return (
      <CardSection>
        <Text style={titleStyle}>
          {this.props.library.title}
        </Text>
      </CardSection>
    );
  }
}

const style = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;
