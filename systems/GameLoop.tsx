
export default function (entities, { events, dispatch }) {

  const player = entities.player;

  if (events.length) {
      events.forEach((e) => {
        switch (e) {
          case "rotate":
            player.rotation = 90;
            return;
        }
      });
  }

  return entities;
}