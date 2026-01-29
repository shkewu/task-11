class DataManager {
  store = {};

  updateData(data, endpointUrl) {
    this.store[endpointUrl] = data;
    throwEvent('dataManagerUpdated', data, endpointUrl);
  }
}

const throwEvent = (type, data, endpointUrl) => {
  const event = new CustomEvent(type, {detail: {data, endpointUrl }});
  dispatchEvent(event);
}

const dataManager = new DataManager();

export {dataManager};
