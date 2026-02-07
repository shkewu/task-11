import "./Modal.scss";
import Shared from "@shared";
import {content} from "../../constants/content";

const {button} = content;
const {
  lib: {createDOMElementFromStr},
} = Shared;

function Modal({imgSrc, description, name}) {
  return createDOMElementFromStr(
    `
        <div class="player-modal">
            <div class="player-modal__modal-background"></div>
            <img src="${imgSrc}" alt="player image"/> 
            <span>${name}</span>
            <p>${description}</p>
            <button class="player-modal__button">
                <p>${button.text}</p>
            </button>
        </div>
        `,
  );
}

export {Modal};
