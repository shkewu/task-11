import Shared from "@shared";

const {
  ui: {Button},
} = Shared;

function Player(src, onEventFunc) {
  const img = document.createElement("img");
  img.src = src;

  return Button({
    events: [
      {
        event: "click",
        callback() {
          if (onEventFunc) onEventFunc();
        },
      },
    ],
    className: "player",
    children: img,
  });
}

export {Player};
