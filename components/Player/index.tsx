import React from "react";
import { Image } from "react-native";
export default function Player({ position, size, rotation }) {
  return (
    <Image
      source={require('./player.png')}
      style={{
        width: 20,
        height: 20,
        position: "absolute",
        left: 140,
        top: 140,
        transform: [{ rotate: `${rotation}deg` }]
      }}
    ></Image>
  );
}
