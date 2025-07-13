import { describe, test, expect } from "vitest";
import { romanNumerals } from "./romanNumerals";

describe("Roman Numerals", () => {
    
     test("Given a number such as 1, 2, or 3, it should return I, II, III.", () => {
            const result1 = romanNumerals(1);
            const result2 = romanNumerals(2);
            const result3 = romanNumerals(3);
            expect(result1).toBe("I");
            expect(result2).toBe("II");
            expect(result3).toBe("III");
       
        })
        test("Given a number 5 should return V", () => {
            const result1 = romanNumerals(5);
           
            expect(result1).toBe("V");
            
        })
        test("Given a number 10 should return X", () => {
            const result1 = romanNumerals(10);
           
            expect(result1).toBe("X");
            
        })
        test("Given a number 50 should return L", () => {
            const result1 = romanNumerals(50);
           
            expect(result1).toBe("L");
            
        })
        test("Given a number 100 should return C", () => {
            const result1 = romanNumerals(100);
           
            expect(result1).toBe("C");
            
        })
        test("Given a number 500 should return D", () => {
            const result1 = romanNumerals(500);
           
            expect(result1).toBe("D");
            
        })
        test("Given a number 1000 should return M", () => {
            const result1 = romanNumerals(1000);
           
            expect(result1).toBe("");
            
        })

});