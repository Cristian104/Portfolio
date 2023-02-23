// First we declare the Kelvin variable
const kelvin = 293;

// We set the value for celsius and add the formula
const celsius = kelvin - 273;

// we convert the kelvin to Fahrenheit
const fahrenheit = celsius * (9 / 5) + 32;

// we round the Fahrenheit value
let convFah = Math.floor(fahrenheit);

console.log("The temperature is", convFah, "degrees Fahrenheit");

const newScale = celsius * (33 / 100);

let roundNew = Math.floor(newScale);

console.log("\nAnd the conversion for Newton Scale is", roundNew);
