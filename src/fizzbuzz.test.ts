import { describe, expect, test } from "vitest";
import { fizzBuzz } from "./fizzbuzz";

describe("FizzBuzz", () => {

    test("Given a number divisible by 3, should return Fizz", () => {
        const result = fizzBuzz(3);
        expect(result).toBe("Fizz");
    })

    test("Given a number divisible by 5, should return Buzz", () => {
        const result = fizzBuzz(5);
        expect(result).toBe("Buzz");
    })

    test("Given a number divisible by 3 AND 5, should return FizzBuzz", () => {
        const result = fizzBuzz(15);
        expect(result).toBe("FizzBuzz");
    })

    test("Given a number not divisible by 3 or 5, should return the number", () => {
        const result = fizzBuzz(7);
        expect(result).toBe(7);
    })
});