import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";

class LibraryList extends Component {
  render() {
    return <View />;
  }
}

const mapStateToProps = ({ libraries }) => ({ libraries });

LibraryList = connect(mapStateToProps)(LibraryList);

export default LibraryList;
