import Hexagon from '../components/Hexagon';

const possibleWallsConfigurations = [15, 23, 27, 29, 30, 39, 43, 45, 46, 51, 53, 54, 57, 58, 60, 7, 11, 13, 14, 19, 21, 22, 25, 26, 28, 35, 37, 38, 49, 50, 52, 56]

const getRandomWallsConfiguration = () => {
  const index = Math.floor(Math.random() * possibleWallsConfigurations.length);
  return possibleWallsConfigurations[index];
}

export default function (entities, { events, dispatch }) {

  const player = entities.player;
  const hexagon = entities.hexagon;
  const gameParameters = entities.gameParameters;

  updateHexagons(entities, dispatch)

  if (events.length) {
      events.forEach((e) => {
        switch (e) {
          case "accelerate-right":
            player.direction = 1;
            player.speed = 30;
            break;
          case "accelerate-left":
            player.direction = -1;
            player.speed = -30;
            break;
          case "stop":
            player.direction = 0;
            player.speed = 0;
            break;
        }
      });
  }

  if (player.direction == 1) {
    player.speed = Math.min(player.speed + 5, 180);
  }
  if (player.direction == -1) {
    player.speed = Math.max(player.speed - 5, -180);
  }
  if (player.speed !== 0) {
    player.rotation = player.rotation + Math.floor(player.speed/30);
    if (player.rotation > 360) {
        player.rotation = player.rotation - 360;
    }
    if (player.rotation < 0) {
        player.rotation = 360 - player.rotation;
    }
  }


  return entities;
}

const updateHexagons = (entities, dispatch) => {
  const parameters = entities.gameParameters
  const hexagonCount = parameters.hexagons

  let collapsed = -1;

  for (let i: number = 0; i < hexagonCount; i++) {
    let name = "hexagon" + i;
    let hexagon = entities[name]
    hexagon.size = hexagon.size - 0.5;
    if (hexagon.size == -1) {
      if (detectCollision(hexagon, entities.player)) {
        dispatch("game-over")
      }
      parameters.score = parameters.score + 1;
      collapsed = i;
    }
  }

  if (parameters.score > parameters.level * 10 && parameters.level < 4) {
    parameters.level = parameters.level + 1;

    let gap = Math.floor(100 / parameters.level);

    for (let i: number = 0; i < hexagonCount; i++) {
      let index = (i + collapsed) % hexagonCount;
      let name = "hexagon" + index;
      const hexagon = entities[name];
      hexagon.nextSize = 100 + (gap * i) - hexagon.size;
    }

    let newHexagonName = "hexagon" + (parameters.hexagons);
    entities[newHexagonName] = {
      size: 100 + hexagonCount * gap,
      nextSize: 100,
      updateFrequency: 20,
      nextMove: 10,
      walls: 33,
      renderer: <Hexagon />                
    }
    parameters.hexagons = parameters.hexagons + 1
  }

  if (collapsed != -1) {
    const hexagon = entities["hexagon" + collapsed]
    hexagon.size = hexagon.nextSize;
    hexagon.nextSize = 100;
    hexagon.walls = getRandomWallsConfiguration();
  }

};

const detectCollision = (hexagon, player) => {
  let playerDirection = (player.rotation + 120) % 360;
  let aimingWall = Math.pow(2, (Math.floor(playerDirection / 60)));
  if ((hexagon.walls & aimingWall) == aimingWall) {
    return true;
  }

  return false;
}