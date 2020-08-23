import { Clock } from "./Clock.js";
(function (window, document) {
    var clockElements = document.querySelectorAll('[data-clock]');
    var clocks = [];
    clockElements.forEach(function (htmlElement) {
        clocks.push(Clock.from(htmlElement));
    });
    var update = function () {
        clocks.forEach(function (clock) { return clock.tick(); });
        window.requestAnimationFrame(update);
    };
    window.requestAnimationFrame(update);
})(window, document);
//# sourceMappingURL=index.js.map