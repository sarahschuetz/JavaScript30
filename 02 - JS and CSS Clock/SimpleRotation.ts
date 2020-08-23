import {Rotation} from "./Rotation";

export class SimpleRotation implements Rotation {
    private currentRotation: number = 0;

    public static create(): Rotation {
        return new SimpleRotation();
    }

    public static from(angleDegrees: number): Rotation {
        const rotation = new SimpleRotation();
        rotation.rotateBy(angleDegrees);
        return rotation;
    }

    public rotateBy(angleDegrees: number): void {
        this.currentRotation += angleDegrees;
    }

    public setRotation(angleDegrees: number): void {
        this.currentRotation = angleDegrees;
    }
}