export function romanNumerals(n: number){
    const romanNumeralsMap: { [key: number]: string } = {
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
const keys = Object.keys(romanNumeralsMap)
  .map(Number)
  .sort((a, b) => b - a);

// Recorrer
for (const key of keys) {
  const roman = romanNumeralsMap[key];
  console.log(key, roman); // podés hacer lo que quieras acá
}
        
}
romanNumerals(1994); // MCMXCIV