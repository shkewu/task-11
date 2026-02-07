class ModalProvider {
  list = [];

  $container = null;

  id = 0;

  modals = {};

  get isCanUse() {
    return !!this.$container && !!Object.keys(this.modals).length;
  }

  init($container, modals) {
    this.$container = $container;
    document.body.append($container);
    this.modals = modals;
  }

  addModal(type, props) {
    if (!this.isCanUse) return;

    const {list, modals, $container} = this;
    const modalId = ++this.id;

    const $modal = modals[type](props);

    const modalData = {$modal, modalId, props, type, close: () => this.closeModal(modalId)};

    list.push(modalData);
    $container.appendChild($modal);
  }

  closeModal(id) {
    if (!this.isCanUse) return;

    const {list} = this;

    const necessaryModal = list.find(({modalId}) => modalId === id);
    const necessaryModalIndex = list.indexOf(necessaryModal);
    necessaryModal.$modal.remove();
    list.splice(necessaryModalIndex, 1);
  }

  closeAll() {
    if (!this.isCanUse) return;

    const {list} = this;
    list.forEach(({$modal}) => $modal.remove());
    list.length = 0;
  }
}

const modalProvider = new ModalProvider();

export {modalProvider};
