var SecondRotator = /** @class */ (function () {
    function SecondRotator() {
    }
    SecondRotator.prototype.degreesFrom = function (date) {
        var seconds = date.getSeconds();
        var degrees = 360 / 60 * seconds;
        return degrees;
    };
    return SecondRotator;
}());
export { SecondRotator };
//# sourceMappingURL=SecondRotator.js.map