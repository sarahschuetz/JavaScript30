var HourRotator = /** @class */ (function () {
    function HourRotator() {
    }
    HourRotator.prototype.degreesFrom = function (date) {
        var hours = date.getHours();
        var degrees = 360 / 12 * hours;
        return degrees;
    };
    return HourRotator;
}());
export { HourRotator };
//# sourceMappingURL=HourRotator.js.map