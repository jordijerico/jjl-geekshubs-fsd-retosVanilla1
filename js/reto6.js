const iva = 0.21 ;

let precio = parseFloat(prompt("Dime un precio"));

let ivaproducto = precio * iva;
let preciofinal = precio + ivaproducto;
console.log("El precio final con iva es: ",preciofinal);