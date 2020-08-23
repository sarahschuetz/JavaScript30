import { Preconditions } from "./Preconditions.js";
import { HourRotator } from "./rotators/HourRotator.js";
import { MinuteRotator } from "./rotators/MinuteRotator.js";
import { SecondRotator } from "./rotators/SecondRotator.js";
var RotatorFactory = /** @class */ (function () {
    function RotatorFactory() {
    }
    RotatorFactory.createRotatorFrom = function (htmlElement) {
        var clockHandType = htmlElement.dataset.clockHand;
        Preconditions.checkNotNull(clockHandType, 'clockhand type must not be null');
        switch (clockHandType) {
            case this.HOUR_IDENTIFIER: {
                return new HourRotator();
            }
            case this.MINUTE_IDENTIFIER: {
                return new MinuteRotator();
            }
            case this.SECOND_IDENTIFIER: {
                return new SecondRotator();
            }
            default: {
                throw new Error("Unsupported clockhand type: " + clockHandType);
            }
        }
    };
    RotatorFactory.HOUR_IDENTIFIER = 'hour';
    RotatorFactory.MINUTE_IDENTIFIER = 'minute';
    RotatorFactory.SECOND_IDENTIFIER = 'second';
    return RotatorFactory;
}());
export { RotatorFactory };
//# sourceMappingURL=RotatorFactory.js.map