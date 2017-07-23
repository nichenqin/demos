import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ headerText }) => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {headerText}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: "#f8f8f8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    paddingTop: 15,
    elevation: 5,
    position: "relative"
  },
  textStyle: {
    fontSize: 20
  }
});

export default Header;
