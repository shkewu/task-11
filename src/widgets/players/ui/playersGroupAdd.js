import "../../app/styles/zeroing.scss";
import "./index.scss";
import {modalProvider, ModalProvider} from "../../app";
import {Modal as PlayerModal} from "../../features/playersModal";
import {content} from "../../src/widgets/players/constants/content";

import Shared from "@shared";
import {dataManager} from "@shared/model";

const {lib: {image}, api: {get}} = Shared;

const modalProviderDOM = ModalProvider();
modalProvider.init(modalProviderDOM, {playerModal: PlayerModal});

document.addEventListener("fulfilled", (event) => {
    dataManager.updateData(event.detail.data, event.detail.endpointUrl);
})

let playersData = [];

document.addEventListener("dataManagerUpdated", (event) => {
    playersData = event.detail.data;
}) // на этом этапе мы можем использовать данные из дм, потому что слушаем его обновление

content.playersImages.forEach((src) => {
    const player = createPlayer(src);
    player.addEventListener("click", () => {
        openModal(src, playersData)
    })
});

get('users')

const openModal = (src, {name, discription}) => {

    modalProvider.addModal(
        "playerModal",
        {
            name: name,
            description: discription, // хз какие поля будут в json place holder
            imgSrc: image(src)
        });
}