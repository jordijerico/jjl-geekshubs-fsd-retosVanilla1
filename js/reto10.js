let numVentas = parseInt(prompt("Dime un numero de ventas"));
let total = 0;

for (let index = 0; index < numVentas; index++) {
    let numero = parseInt(prompt("Dime un precio para esta venta"));
    total += numero;
}
console.log("El precio de todas las ventas es: ",total);