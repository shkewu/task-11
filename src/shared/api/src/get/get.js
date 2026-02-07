import {API_URL} from "../../../constants";
import {REQUEST_EVENTS} from "../constants";

async function get(endpointUrl, {params = {}, requestId = "unknown"} = {}) {
  try {
    throwEvent(REQUEST_EVENTS.pending, {
      requestId, // Добавил requestId в событие, чтобы при отлове можно было понять, что за request начался
      endpointUrl,
    });

    const response = await fetch(`${API_URL}/${endpointUrl}`, params); // Добавил логику по формированию пути baseUrl + endPoint
    if (!response.ok) {
      throw new Error(response.status.toString());
    }

    const data = await response.json();

    throwEvent(REQUEST_EVENTS.fulfilled, {
      requestId, // Добавил requestId в событие, чтобы при отлове можно было понять, что за request закончился успешно
      endpointUrl,
      data,
    });

    return data;
  } catch (err) {
    console.error("Request error:", err);

    throwEvent(REQUEST_EVENTS.rejected, {
      requestId, // Добавил requestId в событие, чтобы при отлове можно было понять, что за request закончился ошибочно
      endpointUrl,
      data: err,
    });
  } finally {
    // Добавил finally, чтобы можно было ловить событие окончания запроса, каким бы он не был, хоть успешно, хоть нет
    throwEvent(REQUEST_EVENTS.settled, {requestId, endpointUrl});
  }
}

function throwEvent(type, data) {
  const event = new CustomEvent(type, {detail: data});
  window.dispatchEvent(event);
}

export {get};
