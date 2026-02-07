import Shared from "@shared";

const {
  lib: {image},
} = Shared;

const content = {
  playersData: {
    1: {src: image("players/front.png")},
    2: {src: image("players/right.png")},
    3: {src: image("players/left.png")},
    4: {src: image("players/back-right.png")},
    5: {src: image("players/back-left.png")},
  },
};

export {content};
