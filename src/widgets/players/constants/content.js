import Shared from "@shared";

const {lib: {image}} = Shared;

const content = {
  playersImages: [
    {src: image("players/front.png")},
    {src: image("players/right.png")},
    {src: image("players/left.png")},
    {src: image("players/back-right.png")},
    {src: image("players/back-left.png")}
  ]
};

export {content};
