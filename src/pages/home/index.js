import "../../app/styles/zeroing.scss";
import "./index.scss";
import {ModalProvider, modalProvider} from "../../app";
import {PlayerModal} from "../../features/playersModal";
import {Players} from "../../widgets/players/ui/Players";

import Shared from "@shared";

const {
  api: {get},
} = Shared;

const {node: $modalContainer} = ModalProvider();
modalProvider.init($modalContainer, {
  playerModal: PlayerModal,
});

const {node: players, unmount} = Players();
document.body.appendChild(players);
