var Preconditions = /** @class */ (function () {
    function Preconditions() {
    }
    Preconditions.checkNotNull = function (objectToCheck, errorMessage) {
        if (objectToCheck === null) {
            throw new Error(errorMessage);
        }
        return objectToCheck;
    };
    return Preconditions;
}());
export { Preconditions };
//# sourceMappingURL=Preconditions.js.map