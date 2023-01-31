let diaSemana = prompt("Dime un día de la semana");
console.log(diaSemana);
switch (diaSemana) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
    case "miércoles":
        console.log("El " + diaSemana + " es un día laboral");

        break;

    case "sábado":
    case "sabado":
    case "domingo":
        console.log("El " + diaSemana + " es un día festivo");

    default:
        break;
}