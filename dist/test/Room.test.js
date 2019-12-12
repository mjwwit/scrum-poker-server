"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var RoomHelper_1 = __importDefault(require("../src/helpers/RoomHelper"));
var SchemeHelper_1 = __importDefault(require("../src/helpers/SchemeHelper"));
describe('create room', function () {
    it('should create room regular', function () {
        var schemeHelper = new SchemeHelper_1.default();
        var roomhelper = new RoomHelper_1.default(schemeHelper);
        var dummyRoom = { name: "scrum", cardSchemeType: "regular", timeout: 0 };
        var room = roomhelper.createRoom(dummyRoom);
        expect(room).toMatchObject({ name: "scrum", cardScheme: {}, timeout: 0 });
    });
    it('should create room fibonacci', function () {
        var roomhelper = new RoomHelper_1.default;
        var dummyRoom = { name: "scrum", cardSchemeType: "fibonacci", timeout: 0 };
        var dummyScheme = new SchemeHelper_1.default;
        var room = roomhelper.createRoom(dummyRoom, dummyScheme);
        expect(room).toMatchObject({ name: "scrum", cardScheme: { type: "fibonacci", scheme: [0, 1, 2, 3, 5, 8, 13, 21] }, timeout: 0 });
    });
    it('should create room custom', function () {
        var roomhelper = new RoomHelper_1.default;
        var dummyRoom = { name: "scrum", cardSchemeType: "custom", scheme: ['eerste', 'B. building', 2, 3, 5, 8, 'number', 21], timeout: 0 };
        var dummyScheme = new SchemeHelper_1.default;
        var room = roomhelper.createRoom(dummyRoom, dummyScheme);
        expect(room).toMatchObject({ name: "scrum", cardScheme: { type: "custom", scheme: ['eerste', 'B. building', 2, 3, 5, 8, 'number', 21] }, timeout: 0 });
    });
    it('should throw exception', function () {
        var roomhelper = new RoomHelper_1.default;
        var dummyRoom = { name: "scrum", cardSchemeType: 'false', timeout: 0 };
        var dummyScheme = new SchemeHelper_1.default;
        expect(function () { roomhelper.createRoom(dummyRoom, dummyScheme); }).toThrow('not a valid card scheme type');
    });
});
describe('save room', function () {
    it('should save a room', function () {
        expect;
    });
    it('should generate an unique identifier', function () {
    });
});
