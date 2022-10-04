// import { operations } from "./operations.js"
// const operations = require("./operations");

// import { expect ,tobe} from "jest"

const { expect, toBe } = require("jest");

const operations = {
    sum: function (a, b) {
        return a + b;
    },
    diff: function (a, b) {
        return a - b;
    },
    multiply: function (a, b) {
        return a * b;
    }
}


// test('Sum of two numbers', () => {
//     expect(
//         operations.sum(10, 2)
//     ).tobe(12);
// })

// test('Difference of two numbers', () => {
//     expect(
//         operations.diff(100, 50)
//     ).tobe(50);
// })


// test('Multiplication of two numbers', () => {
//     expect(
//         operations.multiply(100, 20)
//     ).tobe(2000);
// })

describe('Test with two numbers', () => {
    it('sum of two numbers', () => {
        expect(operations.sum(10, 2)).toBe(12)
    })
})
