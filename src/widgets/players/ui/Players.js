import {modalProvider, ModalProvider} from "../../../app";
import {Modal as PlayerModal} from "../../../features/playersModal";
import {content} from "../constants/content";
import {Player} from "../../../entities/ui/player/Player.js";

import Shared from "@shared";
import {dataManager} from "@shared/model";

const {lib: {image}} = Shared;

const modalProviderDOM = ModalProvider();
modalProvider.init(modalProviderDOM, {playerModal: PlayerModal});

document.addEventListener("fulfilled", (event) => {
    dataManager.updateData(event.detail.data, event.detail.endpointUrl);
})

let playersData = {};

document.addEventListener("dataManagerUpdated", (event) => {
    playersData = event.detail.data;
}) // на этом этапе мы можем использовать данные из дм, потому что слушаем его обновление

const openModal = (src, {name, description}) => {
    modalProvider.addModal(
        "playerModal",
        {
            name: name,
            description: description, // хз какие поля будут в json place holder
            imgSrc: image(src)
        });
}

function Players() {
    content.playersImages.forEach((src) => {
        return Player(src, () => openModal(src, playersData));
    });
}

export {Players}




