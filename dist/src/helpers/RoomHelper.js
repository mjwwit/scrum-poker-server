"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RoomHelper = /** @class */ (function () {
    function RoomHelper(schemeHelper) {
        this.schemeHelper = schemeHelper;
    }
    RoomHelper.prototype.createRoom = function (roomConfiguration) {
        return { name: roomConfiguration.name, cardScheme: this.schemeHelper.createScheme(roomConfiguration.cardSchemeType, roomConfiguration.scheme), timeout: roomConfiguration.timeout };
    };
    return RoomHelper;
}());
exports.default = RoomHelper;
