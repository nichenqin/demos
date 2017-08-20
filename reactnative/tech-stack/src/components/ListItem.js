import React, { Component } from "react";
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  UIManager
} from "react-native";
import CardSection from "./common/CardSection";
import * as actions from "../actions";
import { connect } from "react-redux";

class ListItem extends Component {
  componentWillMount() {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { titleStyle } = style;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const style = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = ({ selectedLibraryId }, { library: { id } }) => {
  const expanded = selectedLibraryId === id;
  return { expanded };
};

ListItem = connect(mapStateToProps, actions)(ListItem);

export default ListItem;
