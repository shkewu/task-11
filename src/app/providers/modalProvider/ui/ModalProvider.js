import Shared from "../../../../shared";
import "./ModalProvider.scss";

const {lib: {createDOMElementFromStr}} = Shared;

function ModalProvider() {
  return createDOMElementFromStr(`<div class="modal-provider"></div>`);
}

export {ModalProvider};