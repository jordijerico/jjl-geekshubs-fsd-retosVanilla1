// let numero1 = parseInt(prompt("Dime un numero"));
// let numero2 = parseInt(prompt("Dime otro numero"));
// let operacion = prompt("Dime que quieres hacer");

// let result = 0;
// switch (operacion) {
//     case operacion == "+":
//         result = numero1 + numero2;
//         window.alert(result)
//         break;
//     case operacion == "-":
//         result = numero1 + numero2;
//         window.alert(result)
//         break;
//     case operacion == "/":
//         result = numero1 * numero2;
//         window.alert(result)
//         break;
//     case operacion == "*":
//         result = numero1 * numero2;
//         window.alert(result)
//         break;
//         case operacion == "^":
//         result = numero1 ** numero2;
//         window.alert(result)
//         break;
//         case operacion == "%":
//             result = numero1 % numero2;
//             window.alert(result)
//             break;
//     default:
//         break;
// }


//CALCULADORA
let numero1 = parseInt(prompt("Dime un numero", ""));
let numero2 = parseInt(prompt("Dime otro numero", ""));
let operacion = prompt("Dime que quieres hacer", "");

if (operacion == "+") {
    let result = numero1 + numero2;
    window.alert(result)
} else if (operacion == "-") {
    let result = numero1 - numero2;
    window.alert(result)
} else if (operacion == "*") {
    let result = numero1 * numero2;
    window.alert(result)
} else if (operacion == "/") {
    let result = numero1 / numero2;
    window.alert(result)
    
} else if (operacion == "%") {
    let result = numero1 % numero2;
    window.alert(result)
    
} else if (operacion == "^") {
    let result = numero1 ** numero2;
    window.alert(result)
    
} 