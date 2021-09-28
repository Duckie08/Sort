"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersColelction = void 0;
var CharactersColelction = /** @class */ (function () {
    function CharactersColelction(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersColelction.prototype, "length", {
        get: function () {
            return this.data.length;
        },
        enumerable: false,
        configurable: true
    });
    CharactersColelction.prototype.compare = function (leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    CharactersColelction.prototype.swap = function (leftIndex, rightIndex) {
        var charaters = this.data.split('');
        var leftHand = charaters[leftIndex];
        charaters[leftIndex] = charaters[rightIndex];
        charaters[rightIndex] = leftHand;
        this.data = charaters.join('');
    };
    return CharactersColelction;
}());
exports.CharactersColelction = CharactersColelction;
