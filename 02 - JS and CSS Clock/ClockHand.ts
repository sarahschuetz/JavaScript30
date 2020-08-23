import {Rotation} from "./Rotation";
import {Preconditions} from "./Preconditions.js";
import {SimpleRotation} from "./SimpleRotation.js";
import {Rotator} from "./rotators/Rotator";
import {RotatorFactory} from "./RotatorFactory.js";

export class ClockHand {
    private readonly htmlElement: HTMLElement;
    private readonly rotator: Rotator;

    constructor(htmlElement: HTMLElement) {
        this.htmlElement = Preconditions.checkNotNull(htmlElement, 'htmlElement must not be null.');
        this.rotator = RotatorFactory.createRotatorFrom(htmlElement);
    }

    public static from(htmlElement: HTMLElement): ClockHand {
        return new ClockHand(htmlElement);
    }

    public tick(date: Date): void {
        const degrees = this.rotator.degreesFrom(date);
        this.htmlElement.style.transform = `rotate(${degrees}deg)`;
    }
}