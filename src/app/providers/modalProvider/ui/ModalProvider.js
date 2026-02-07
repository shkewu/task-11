import Shared from "@shared";
import "./ModalProvider.scss";

const {
  lib: {createDOMElementFromStr},
} = Shared;

function ModalProvider() {
  return {node: createDOMElementFromStr(`<div class="modal-provider"></div>`)};
}

export {ModalProvider};
