/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { GameEngine } from "react-native-game-engine";
import React, { useRef, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  SafeAreaView
} from 'react-native';
import Canvas from 'react-native-canvas';
import Constants from './Constants';
import Player from './components/Player';
import GameLoop from "./systems/GameLoop";

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isGameRunning, setIsGameRunning] = useState(true);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the recommendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  const safePadding = '5%';
  const BoardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
  const engine = useRef(null);

  return (
    <View
        style={styles.canvas}
        onTouchStart={(e) => engine.current.dispatch("rotate")}
    >
          <GameEngine
                  ref={engine}
                  style={{
                    width: BoardSize,
                    height: BoardSize,
                    flex: null,
                    backgroundColor: "white",
                  }}
                  entities={{
                    player: {
                      position: [7.5, 7.5],
                      size: Constants.CELL_SIZE,
                      updateFrequency: 10,
                      nextMove: 10,
                      xspeed: 0,
                      yspeed: 0,
                      rotation: 45,
                      renderer: <Player />,
                    }
                  }}
                  systems={[GameLoop]}
                          running={isGameRunning}
                          onEvent={(e) => {
                            switch (e) {
                              case "game-over":
                                alert("Game over!");
                                setIsGameRunning(false);
                                return;
                            }
                          }}
                />
        </View>
  );
}

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default App;
