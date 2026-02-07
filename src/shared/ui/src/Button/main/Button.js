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

function Button({events = [], children = null, disabled = false, timeout = 300, className = ""}) {
  const button = document.createElement("button");
  button.classList.add("button");
  button.className = `${className}`;

  const controller = new AbortController();

  events.forEach(({event, callback, options}) => {
    button.addEventListener(event, () => {
      if (disabled) return
      disabled = true;

      setTimeout(() => {
        disabled = false;
      }, timeout);

      callback();
    }, {
      ...options,
      signal: controller.signal
    });
  });

  if (!!children) {
    if (isString(children)) {
      button.innerHTML = children;
    } else {
      button.append(children);
    }

    if (disabled) {
      button.disabled = true;
    }

    return {
      button,
      unmount() {
        controller.abort();
      }
    };
  }
}
export {Button}


