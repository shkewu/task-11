import "./Players.scss";
import {modalProvider} from "../../../app";
import {content} from "../constants/content";
import {Player} from "../../../entities/player/ui/player/Player";

import Shared from "@shared";

const {
  api: {get, REQUEST_EVENTS},
  model: {dataManager, DATA_MANAGER_EVENTS},
  lib: {image},
} = Shared;

const openModal = (src, {name, description}) => {
  modalProvider.addModal("playerModal", {
    name: name,
    description: description, // хз какие поля будут в json place holder
    imgSrc: image(src),
  });
};

function Players() {
  const player = document.createElement("div");
  player.classList.add("players");

  get("users");

  const playersList = [];

  const clearFunctions = [];

  const handleRequest = ({detail}) => {
    if (detail?.endpointUrl !== "users") return;

    const {data} = detail;

    dataManager.store.players = data;
    dataManager.throwEvent();
  };
  window.addEventListener(REQUEST_EVENTS.fulfilled, handleRequest);
  clearFunctions.push(() => {
    window.removeEventListener(REQUEST_EVENTS.fulfilled, handleRequest);
  });

  const onDataManagerUpdated = ({detail: {store}}) => {
    if (!store.players) return;

    playersList.forEach(({unmount}) => {
      unmount();
    });
    playersList.length = 0;

    store.players.forEach(({id}) => {
      const playersData = content.playersData[id];
      if (!playersData) return;
      playersList.push(Player(playersData.src));
    });

    playersList.forEach(({node}) => {
      player.appendChild(node);
    });
  };
  window.addEventListener(DATA_MANAGER_EVENTS.updated, onDataManagerUpdated);
  clearFunctions.push(() => {
    window.removeEventListener(DATA_MANAGER_EVENTS.updated, onDataManagerUpdated);
  });

  return {
    node: player,
    unmount() {
      player.remove();

      playersList.forEach(({unmount}) => unmount());

      clearFunctions.forEach((clear) => clear());
    },
  };
}

export {Players};
