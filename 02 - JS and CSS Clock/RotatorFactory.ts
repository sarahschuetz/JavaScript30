import {Rotator} from "./rotators/Rotator.js";
import {Preconditions} from "./Preconditions.js";
import {HourRotator} from "./rotators/HourRotator.js";
import {MinuteRotator} from "./rotators/MinuteRotator.js";
import {SecondRotator} from "./rotators/SecondRotator.js";

export class RotatorFactory {
    private static readonly HOUR_IDENTIFIER = 'hour';
    private static readonly MINUTE_IDENTIFIER = 'minute';
    private static readonly SECOND_IDENTIFIER = 'second';

    private constructor() {}

    public static createRotatorFrom(htmlElement: HTMLElement) : Rotator {
        const clockHandType: String = htmlElement.dataset.clockHand;
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
                throw new Error(`Unsupported clockhand type: ${clockHandType}`);
            }
        }
    }
}