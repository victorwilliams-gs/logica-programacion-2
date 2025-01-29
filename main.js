
const prompt = require("prompt-sync")();

let celsius = prompt("Ingrese la temperatura (°C): ");

try{
    celsius = Number(celsius);
}
catch{
    console.log("Entrada invalida!");
}

const kelvin = celsius + 273.15;
const fahrenh = (celsius * 9/5) + 32;

console.log("Grados Kelvin: ", kelvin);
console.log("Grados Fahrenheit: ", fahrenh);