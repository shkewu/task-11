import Shared from "@shared";

const {ui: {Button}} = Shared;

function Player(src, onEventFunc) {
     return Button({
        events: [{
            event: "click",
            callback() {
                if(onEventFunc) onEventFunc();
            },
        }],
        className: "player",
        src: src,
    })
}

export {Player};