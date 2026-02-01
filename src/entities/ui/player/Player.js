import Shared from "@shared";

const {ui: {Button}} = Shared;

function Player(src, onEventFunc) {
    const player = Button({
        events: [
            {
                event: "click",
                callback() {
                    if(onEventFunc) onEventFunc();
                },
                options: {
                    passive: true,
                }
            }
        ],
        src: src,
        className: "player",
    });

    return player;
}

export {Player};