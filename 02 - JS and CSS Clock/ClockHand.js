import { Preconditions } from "./Preconditions.js";
import { RotatorFactory } from "./RotatorFactory.js";
var ClockHand = /** @class */ (function () {
    function ClockHand(htmlElement) {
        this.htmlElement = Preconditions.checkNotNull(htmlElement, 'htmlElement must not be null.');
        this.rotator = RotatorFactory.createRotatorFrom(htmlElement);
    }
    ClockHand.from = function (htmlElement) {
        return new ClockHand(htmlElement);
    };
    ClockHand.prototype.tick = function (date) {
        var degrees = this.rotator.degreesFrom(date);
        this.htmlElement.style.transform = "rotate(" + degrees + "deg)";
    };
    return ClockHand;
}());
export { ClockHand };
//# sourceMappingURL=ClockHand.js.map