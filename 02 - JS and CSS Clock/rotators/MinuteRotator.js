var MinuteRotator = /** @class */ (function () {
    function MinuteRotator() {
    }
    MinuteRotator.prototype.degreesFrom = function (date) {
        var minutes = date.getMinutes();
        var degrees = 360 / 60 * minutes;
        return degrees;
    };
    return MinuteRotator;
}());
export { MinuteRotator };
//# sourceMappingURL=MinuteRotator.js.map