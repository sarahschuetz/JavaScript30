import {Rotator} from "./Rotator.js";

export class MinuteRotator implements Rotator {
    public degreesFrom(date: Date): number {
        const minutes = date.getMinutes();
        const degrees = 360 / 60 * minutes;
        return degrees;
    }
}