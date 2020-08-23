import {Rotator} from "./Rotator.js";

export class HourRotator implements Rotator {
    public degreesFrom(date: Date): number {
        const hours = date.getHours();
        const degrees = 360 / 12 * hours;
        return degrees;
    }
}