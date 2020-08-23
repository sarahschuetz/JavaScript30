import { ClockHand } from "./ClockHand.js";
var Clock = /** @class */ (function () {
    function Clock(clockElement) {
        var _this = this;
        this.clockHands = [];
        clockElement.querySelectorAll('div[data-clock-hand]').forEach(function (htmlElement) {
            _this.clockHands.push(new ClockHand(htmlElement));
        });
    }
    Clock.from = function (clockElement) {
        return new Clock(clockElement);
    };
    Clock.prototype.tick = function () {
        var currentTime = new Date();
        this.clockHands.forEach(function (clockHand) {
            clockHand.tick(currentTime);
        });
    };
    return Clock;
}());
export { Clock };
//# sourceMappingURL=Clock.js.map