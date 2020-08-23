import {Clock} from "./Clock.js";

((window, document) => {
    const clockElements: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>('[data-clock]');
    const clocks = [];

    clockElements.forEach(htmlElement => {
        clocks.push(Clock.from(htmlElement));
    });

    const update = () => {
        clocks.forEach((clock: Clock) => clock.tick());
        window.requestAnimationFrame(update);
    }

    window.requestAnimationFrame(update);
})(window, document);