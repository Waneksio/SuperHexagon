
export default function (entities, { events, dispatch }) {

  const player = entities.player;
  const hexagon = entities.hexagon;

  hexagon.size = hexagon.size - 1;
  if (hexagon.size == -1) {
    hexagon.size = 100
  }

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
