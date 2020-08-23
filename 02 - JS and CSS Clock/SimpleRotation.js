var SimpleRotation = /** @class */ (function () {
    function SimpleRotation() {
        this.currentRotation = 0;
    }
    SimpleRotation.create = function () {
        return new SimpleRotation();
    };
    SimpleRotation.from = function (angleDegrees) {
        var rotation = new SimpleRotation();
        rotation.rotateBy(angleDegrees);
        return rotation;
    };
    SimpleRotation.prototype.rotateBy = function (angleDegrees) {
        this.currentRotation += angleDegrees;
    };
    SimpleRotation.prototype.setRotation = function (angleDegrees) {
        this.currentRotation = angleDegrees;
    };
    return SimpleRotation;
}());
export { SimpleRotation };
//# sourceMappingURL=SimpleRotation.js.map