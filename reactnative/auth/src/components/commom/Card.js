import React from "react";
import { View } from "react-native";

const Card = ({ children }) => {
  const { container } = styles;
  return (
    <View style={container}>
      {children}
    </View>
  );
};

const styles = {
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    elevation: 0,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
