
export default function (entities, { events, dispatch }) {

  const player = entities.player;

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
  }


  return entities;
}
