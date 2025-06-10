import React from "react";
import { View, Text } from "react-native";
export default function Score({ score }) {
  return (
    <View>
      <Text style={{
        fontSize: 20,
        color: 'gray',
        position: "absolute",
        left: 270,
        top: 270
      }}>{score}</Text>
    </View>
  );
}
