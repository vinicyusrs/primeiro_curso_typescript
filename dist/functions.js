"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// declara returno não explicito
const sum = (x, y) => {
    return x + y;
};
// declara returno explicito
const sum1 = (x, y) => {
    return x + y;
};
// declara returno explicito
const sum2 = (x, y) => {
    // conversão de Tipagem
    return (x + y).toString();
};
// declara returno explicito // Intersections
const sum3 = (x, y) => {
    // conversão de Tipagem
    return (x + y).toString();
};
// declara returno void
const log = (message) => {
    // conversão de Tipagem
    console.log(message);
};
// declara returno void
const log2 = (message) => {
    // conversão de Tipagem
    console.log(message);
};
const value = sum(2, 3);
//# sourceMappingURL=functions.js.map