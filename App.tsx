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
  SafeAreaView,
  GestureResponderEvent
} from 'react-native';
import Constants from './Constants';
import Player from './components/Player';
import Hexagon from './components/Hexagon';
import Score from './components/Score';
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

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isGameRunning, setIsGameRunning] = useState(true);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const safePadding = '5%';
  const BoardSize = Constants.GRID_SIZE * Constants.CELL_SIZE;
  const engine = useRef(null);

  const spin = (e: GestureResponderEvent) => {
      const x = e.nativeEvent.pageX;
      if (x > Constants.MAX_WIDTH / 2) {
        engine.current.dispatch("accelerate-right");
      } else {
        engine.current.dispatch("accelerate-left");
      }
    }

  const stop = (e: GestureResponderEvent) => {
    engine.current.dispatch("stop");
  }

  return (
    <View
        style={styles.canvas}
        onTouchStart={spin}
        onTouchEnd={stop}
    >
          <GameEngine
                  pointerEvents="none"
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
                      speed: 0,
                      rotation: 0,
                      direction: 0,
                      renderer: <Player />,
                    },
                    hexagon0: {
                      size: 100,
                      updateFrequency: 20,
                      nextMove: 10,
                      nextSize: 100,
                      walls: 62,
                      renderer: <Hexagon />
                    },
                    gameParameters: {
                      updateFrequency: 10,
                      nextMove: 10,
                      score: 0,
                      hexagons: 1,
                      level: 1,
                      renderer: <Score/>
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
