import Shared from "@shared";

const {ui: {Button}} = Shared;


const allParams  = [
    {
    events: [{
        event: "click",
        callback() {
            if(onEventFunc) onEventFunc();
        },
        options: {
            passive: true,
        }
    }],
        className: "player-left",
        src: 'random.png'
    },
]


function Player(onEventFunc) {
    return allParams.forEach(param => Button(param))
}

export {Player};