import {Rotator} from "./Rotator.js";

export class SecondRotator implements Rotator {
    public degreesFrom(date: Date): number {
        const seconds = date.getSeconds();
        const degrees = 360 / 60 * seconds;
        return degrees;
    }
}