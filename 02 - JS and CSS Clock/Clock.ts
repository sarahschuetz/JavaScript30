import {ClockHand} from "./ClockHand.js";

export class Clock {
    private readonly clockHands: ClockHand[] = [];

    private constructor(clockElement: HTMLElement) {
        clockElement.querySelectorAll<HTMLElement>('div[data-clock-hand]').forEach(htmlElement => {
            this.clockHands.push(new ClockHand(htmlElement));
        });
    }

    public static from(clockElement: HTMLElement): Clock {
        return new Clock(clockElement);
    }

    public tick(): void {
        const currentTime: Date = new Date();
        this.clockHands.forEach(clockHand => {
            clockHand.tick(currentTime);
        });
    }
}