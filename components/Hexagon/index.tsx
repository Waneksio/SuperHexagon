import React from "react";
import { View } from 'react-native';
export default function Hexagon({ position, size }) {
  return (
    <View>
      <View
        style={{
        width: 384 * size / 100,
        height: 300 * size / 100,
        borderTopColor: 'black',
        borderTopWidth: 2,
        position: "absolute",
        left: 150 - ((384 * size) / 100) / 2,
        top: 150 - ((((300 * size) / 100)) / 2) - (((300 * size) / 100)) / 2
      }}
      ></View>
      <View
        style={{
          width: 346 * size / 100,
          height: 300 * size / 100,
          borderTopColor: 'black',
          borderTopWidth: 2,
          position: "absolute",
          left: 150 + ((346 * size / 100) / 2) * 0.87 - (346 * size / 100) / 2,
          top: 150 - (((300 * size / 100)) / 4) - ((300 * size / 100)) / 2,
          transform: [{ rotate: `60deg` }]
        }}
      ></View>
      <View
        style={{
          width: 346 * size / 100,
          height: 300 * size / 100,
          borderTopColor: 'black',
          borderTopWidth: 2,
          position: "absolute",
          left: 150 + ((346 * size / 100) / 2) * 0.87 - (346 * size / 100) / 2,
          top: 150 + (((300 * size / 100)) / 4) - ((300 * size / 100)) / 2,
          transform: [{ rotate: `120deg` }]
        }}
      ></View>
      <View
        style={{
          width: 384 * size / 100,
          height: 300 * size / 100,
          borderTopColor: 'black',
          borderTopWidth: 2,
          position: "absolute",
          left: 150 - ((384 * size) / 100) / 2,
          top: 150 + ((((300 * size) / 100)) / 2) - (((300 * size) / 100)) / 2,
          transform: [{ rotate: `180deg` }]
        }}
      ></View>
      <View
        style={{
          width: 346 * size / 100,
          height: 300 * size / 100,
          borderTopColor: 'black',
          borderTopWidth: 2,
          position: "absolute",
          left: 150 - ((346 * size / 100) / 2) * 0.87 - (346 * size / 100) / 2,
          top: 150 + (((300 * size / 100)) / 4) - ((300 * size / 100)) / 2,
          transform: [{ rotate: `240deg` }]
        }}
      ></View>
      <View
        style={{
          width: 346 * size / 100,
          height: 300 * size / 100,
          borderTopColor: 'black',
          borderTopWidth: 2,
          position: "absolute",
          left: 150 - ((346 * size / 100) / 2) * 0.87 - (346 * size / 100) / 2,
          top: 150 - (((300 * size / 100)) / 4) - ((300 * size / 100)) / 2,
          transform: [{ rotate: `300deg` }]
        }}
      ></View>
    </View>
  );
}

// source={require('./hexagon.png')}
// style={{
//   width: 300 * size/100,
//   height: 300 * size/100,
//   position: "absolute",
//   left: (300 - 300 * size / 100) / 2,
//   top: (300 - 300 * size / 100) / 2
//        left: 150 - ((345 * size / 100) - 172.5) / 2,
// top: 300 + ((300 * size / 100) - 150) / 2
// }}
// >