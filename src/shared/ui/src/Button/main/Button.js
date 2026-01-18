// это будет универсальная функция создания кнопки, которая будет принимать

const events = [
  {
    event: "click",
    callback() {
      console.log("click"); // логика кнопки, которую мы создаем
    },
    options: {
      passive: true,
      once: true
    }
  }
  // ...
];

function Button({events = [], disabled = false, timeout = 300, children = null, className = ""}) {
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

//     if(typeof(children) = text) {
//         const child = document.createElement("div"); 
//         child.textContent = children;
//     } else if(typeof(children) = string) {
//         const child = document.createElement("img"); 
//         child.src = chisldren; 
//     } else if(typeof(children) = DOMel) {

//     }

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


