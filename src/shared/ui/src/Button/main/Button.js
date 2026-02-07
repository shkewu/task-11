// этот массив нужно расположить в файле content непосредственно в папке элемента, для которого будем создавать кнопку

// const events = [
//   {
//     event: "click",
//     callback() {
//       console.log("click"); // логика кнопки, которую мы создаем
//     },
//     options: {
//       passive: true,
//       once: true
//     }
//   }
//   // ...
// ];

import {isString} from "lodash";

function Button({events = [], children = null, disabled = false, className}) {
  const button = document.createElement("button");

  button.classList.add("button");
  isString(className) && button.classList.add(className);

  disabled && (button.disabled = true);


  const controller = new AbortController();

  const clearFunctions = [];

  events.forEach(({event, timeout, callback, options = {}}) => {
    let isDisabled;

    button.addEventListener(event, () => {
      if (disabled || isDisabled) return;

      if (isFinite(timeout)) {
        isDisabled = true;

        const timeoutId = setTimeout(() => {
          isDisabled = false;
        }, timeout);

        clearFunctions.push(() => clearTimeout(timeoutId));
      }

      callback();
    }, {
      ...options,
      signal: controller.signal
    });
  });

  if (!!children) {
    isString(children)
      ? button.innerHTML = children
      : button.append(children);
  }

  return {
    button,
    unmount() {
      button.remove();

      controller.abort();

      clearFunctions.forEach(clear => clear());
      clearFunctions.length = 0;
    }
  };
}

export {Button};


