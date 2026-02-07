import {DATA_MANAGER_EVENTS} from "../../constants/events";

class DataManager {
  store = {};

  throwEvent() {
    const event = new CustomEvent(DATA_MANAGER_EVENTS.updated, {detail: {store: this.store}});
    window.dispatchEvent(event);
  }
}

const dataManager = new DataManager();

export {dataManager};
