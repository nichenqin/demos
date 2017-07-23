import React from "react";
import { View, Text } from "react-native";

const AlbumDetail = ({ album }) =>
  <View>
    <Text>
      {album.title}
    </Text>
  </View>;

export default AlbumDetail;
