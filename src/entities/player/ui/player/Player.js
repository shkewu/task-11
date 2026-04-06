import Shared from "@shared";

const {
  ui: {Button},
} = Shared;

function Player(imagesData = [], onEventFunc) {
  const images = imagesData.map(({src, alt, classes = []}) => {
    if(!!src) {
      const img = document.createElement("img");

      if(!!classes) classes.forEach(style => img.classList.add(style));

      img.src = src;
      img.alt = alt;
      return img;
    }
  })

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
    children: images,
  });
}

export {Player};
