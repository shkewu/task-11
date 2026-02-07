import "../../app/styles/zeroing.scss";
import "./index.scss";
import {modalProvider, ModalProvider} from "../../app";
import {Modal as PlayerModal} from "../../features/playersModal";

import Shared from "@shared";
import {Players} from "../../widgets/players/ui/Players";

const {lib: {image}, api: {get}} = Shared;

get("users").then(user => {
  console.log(user);
});

Players()

// const modalProviderDOM = ModalProvider();
// modalProvider.init(modalProviderDOM, {playerModal: PlayerModal});
// modalProvider.addModal(
//   "playerModal",
//   {
//     name: "dwqwqd",
//     description: "dwqqwd",
//     imgSrc: image("players/left.png")
//   }
// );

