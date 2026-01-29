import Shared from "@shared";

const {ui: {Button}} = Shared;

const createPlayer = (src) => {
    const player = document.createElement("div");
    playerContainer.classList.add("player");

    const playerImg = document.createElement("img");
    playerImg.src = src;
    playerImg.alt = "playerImg";
    playerImg.classList.add("playerImg");

    player.appendChild(playerImg);
    return player;
}

export {createPlayer};