import {API_URL} from "../../../constants";
import {REQUEST_EVENTS} from "../constants";

async function get(endpoint, {params = {}, requestId = "unknown"} = {}) {
  try {
    throwEvent(REQUEST_EVENTS.pending, {
      requestId, // Добавил requestId в событие, чтобы при отлове можно было понять, что за request начался
      endpoint
    });

    const response = await fetch(`${API_URL}/${endpoint}`, params); // Добавил логику по формированию пути baseUrl + endPoint
    const data = await response.json();

    throwEvent(REQUEST_EVENTS.fulfilled, {
      requestId, // Добавил requestId в событие, чтобы при отлове можно было понять, что за request закончился успешно
      endpoint,
      data
    });

    return data;
  } catch (err) {
    console.error("Request error:", err);

    throwEvent(REQUEST_EVENTS.rejected, {
      requestId, // Добавил requestId в событие, чтобы при отлове можно было понять, что за request закончился ошибочно
      endpoint,
      data: err
    });
  } finally {
    // Добавил finally, чтобы можно было ловить событие окончания запроса, каким бы он не был, хоть успешно, хоть нет
    throwEvent(REQUEST_EVENTS.settled, {requestId, endpoint});
  }
}

function throwEvent(type, data) {
  const event = new CustomEvent(type, {details: data});
  dispatchEvent(event);
}

export {get};
