import React from "react";
import { View, Image } from 'react-native';
export default function Hexagon({ position, size, nextSize, walls }) {
  const images = []
  images[7] = require('./hexagon7.png');
  images[11] = require('./hexagon11.png');
  images[13] = require('./hexagon13.png');
  images[14] = require('./hexagon14.png');
  images[15] = require('./hexagon15.png');
  images[19] = require('./hexagon19.png');
  images[21] = require('./hexagon21.png');
  images[22] = require('./hexagon22.png');
  images[23] = require('./hexagon23.png');
  images[25] = require('./hexagon25.png');
  images[26] = require('./hexagon26.png');
  images[27] = require('./hexagon27.png');
  images[28] = require('./hexagon28.png');
  images[29] = require('./hexagon29.png');
  images[30] = require('./hexagon30.png');
  images[33] = require('./hexagon33.png');
  images[35] = require('./hexagon35.png');
  images[37] = require('./hexagon37.png');
  images[38] = require('./hexagon38.png');
  images[39] = require('./hexagon39.png');
  images[41] = require('./hexagon41.png');
  images[43] = require('./hexagon43.png');
  images[45] = require('./hexagon45.png');
  images[46] = require('./hexagon46.png');
  images[49] = require('./hexagon49.png');
  images[50] = require('./hexagon50.png');
  images[51] = require('./hexagon51.png');
  images[52] = require('./hexagon52.png');
  images[53] = require('./hexagon53.png');
  images[54] = require('./hexagon54.png');
  images[56] = require('./hexagon56.png');
  images[57] = require('./hexagon57.png');
  images[58] = require('./hexagon58.png');
  images[60] = require('./hexagon60.png');
  images[62] = require('./hexagon62.png');
  return (
      

      <Image
            source={images[walls]}
            style={{
              width: 600 * size / 100,
              height: 600 * size / 100,
              position: "absolute",
              left: (300 - 600 * size / 100) / 2,
              top: (300 - 600 * size / 100) / 2
            }}
          ></Image>
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