"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SchemeHelper = /** @class */ (function () {
    function SchemeHelper() {
    }
    SchemeHelper.prototype.createScheme = function (schemeType, customScheme) {
        var cardScheme = { type: '', scheme: [] };
        switch (schemeType) {
            case 'fibonacci':
                cardScheme = this.createFibonacciScheme();
                break;
            case 'regular':
                cardScheme = this.createRegular();
                break;
            case 'custom':
                cardScheme = this.createCustom(customScheme || []);
                break;
            default:
                throw new Error("not a valid card scheme type");
        }
        return cardScheme;
    };
    SchemeHelper.prototype.createCustom = function (customArray) {
        return {
            type: 'custom',
            scheme: customArray
        };
    };
    SchemeHelper.prototype.createRegular = function () {
        return {
            type: 'regular',
            scheme: [0, .5, 1, 2, 3, 5, 8, 13, 20]
        };
    };
    SchemeHelper.prototype.createFibonacciScheme = function () {
        return {
            type: 'fibonacci',
            scheme: [0, 1, 2, 3, 5, 8, 13, 21]
        };
    };
    return SchemeHelper;
}());
exports.default = SchemeHelper;
