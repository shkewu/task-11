import Shared from "@shared";
import {PLAYERS_NAMES} from "./constants";
const {
  lib: {image},
} = Shared;

const content = {
  playersData: {
    1: [{src: image(`players/${PLAYERS_NAMES.FRONT}.png`), alt: `${PLAYERS_NAMES.FRONT}`, classes: [`${PLAYERS_NAMES.FRONT}`]}],
    2: [{src: image(`players/${PLAYERS_NAMES.RIGHT}.png`), alt: `${PLAYERS_NAMES.RIGHT}`, classes: [`${PLAYERS_NAMES.RIGHT}`]}],
    3: [{src: image(`players/${PLAYERS_NAMES.LEFT}.png`), alt: `${PLAYERS_NAMES.LEFT}`, classes: [`${PLAYERS_NAMES.LEFT}`]}],
    4: [{src: image(`players/${PLAYERS_NAMES.BACK_RIGHT}.png`), alt: `${PLAYERS_NAMES.BACK_RIGHT}`, classes: [`${PLAYERS_NAMES.BACK_RIGHT}`]}],
    5: [{src: image(`players/${PLAYERS_NAMES.BACK_LEFT}.png`), alt: `${PLAYERS_NAMES.BACK_LEFT}`, classes: [`${PLAYERS_NAMES.BACK_LEFT}`]}],
  },
};

export {content};
