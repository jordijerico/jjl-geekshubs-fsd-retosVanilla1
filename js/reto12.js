const password = "123admin";

let passwordInput = prompt("Dime la contraseña");

if (passwordInput === password) {
    console.log("Contraseña correcta");
} else {
    console.log("contraseña incorrecta");
    for (let index = 0; index < 2; index++) {
        let passwordInput = prompt("Dime la contraseña");
        console.log("contraseña incorrecta");
    }
    console.log("Se acabaron los intentos, lo siento");
}