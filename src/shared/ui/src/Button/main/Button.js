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

function Button({events = [], disabled = false, timeout = 300, src = null, children = null, className = ""}) {
  const button = document.createElement("button");
  button.classList.add("button");
  button.className = `${className}`;

  const controller = new AbortController();

  events.forEach(({event, callback, options}) => {
    button.addEventListener(event, callback, { // нужно еще сделать как-то setTimeout
      ...options,
      signal: controller.signal
    });
  });

  if (typeof children === "string") {
    const child = document.createElement("div");
    child.textContent = children;
    button.appendChild(child);
  }

  if (!!src) {
    const child = document.createElement("img");
    child.src = src;
    child.alt = "image";
    button.appendChild(child);
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

export {Button};


