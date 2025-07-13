"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.romanNumerals = romanNumerals;
function romanNumerals(n) {
    var romanNumeralsMap = {
        1000: "M",
        900: "CM",
        500: "D",
        400: "CD",
        100: "C",
        90: "XC",
        50: "L",
        40: "XL",
        10: "X",
        9: "IX",
        5: "V",
        4: "IV",
        1: "I"
    };
    var keys = Object.keys(romanNumeralsMap)
        .map(Number)
        .sort(function (a, b) { return b - a; });
    // Recorrer
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        var roman = romanNumeralsMap[key];
        console.log(key, roman); // podés hacer lo que quieras acá
    }
}
