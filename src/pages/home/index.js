import "../../app/styles/zeroing.css";
import "./index.css";
import {modalProvider, ModalProvider} from "../../app";
import {Modal as PlayerModal} from "../../features/playersModal";

import Shared from "../../shared";

const {lib: {image}} = Shared;



const modalProviderDOM = ModalProvider();
modalProvider.init(modalProviderDOM, {playerModal: PlayerModal});
modalProvider.addModal(
  "playerModal",
  {
    name: "dwqwqd",
    description: "dwqqwd",
    imgSrc: image("players/left.png")
  }
);

