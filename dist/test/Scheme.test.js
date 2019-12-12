"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SchemeHelper_1 = __importDefault(require("../src/helpers/SchemeHelper"));
describe('Create schemes', function () {
    it('should create a fibonacci scheme', function () {
        var schemeHelper = new SchemeHelper_1.default();
        var cardScheme = schemeHelper.createScheme('fibonacci');
        expect(cardScheme).toMatchObject({ type: "fibonacci", scheme: [0, 1, 2, 3, 5, 8, 13, 21] });
    });
    it('should create a regular scheme', function () {
        var schemeHelper = new SchemeHelper_1.default();
        var cardScheme = schemeHelper.createScheme('regular');
        expect(cardScheme).toMatchObject({ type: "regular", scheme: [0, .5, 1, 2, 3, 5, 8, 13, 20] });
    });
    it('should create a custom scheme', function () {
        var schemeHelper = new SchemeHelper_1.default();
        var cardScheme = schemeHelper.createScheme('custom', ['eerste', 'B. building', 2, 3, 5, 8, 'number', 21]);
        expect(cardScheme).toMatchObject({ type: "custom", scheme: ['eerste', 'B. building', 2, 3, 5, 8, 'number', 21] });
    });
});
