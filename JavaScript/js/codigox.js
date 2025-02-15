function operar() {
    var num1= parseInt(document.getElementById("num1").value);
    var num2= parseInt(document.getElementById("num2").value);
    var eleccion= document.getElementById("operacion").value;
    var resultado = document.getElementById("resultado");

    if (isNaN(num1) || isNaN(num2)) {
        resultado.innerHTML = `<b style="color: crimson;">Los Caompos Están Vacíos</b>`;
        return;
    }

    switch(eleccion) {
        case "suma":
            resultado.innerHTML = `El resultado de la suma es: ${num1 + num2}`;
            break;
        case "resta":
            resultado.innerHTML = `El resultado de la resta es: ${num1 - num2}`;
            break;
        case "multiplicacion":
            resultado.innerHTML = `El resultado de la multiplicacion es: ${num1 * num2}`;
            break;
        case "division":
            if (num2 === 0) {
                resultado.innerHTML = `No se pueden realizar divisiones entre 0`;
            } else {
                resultado.innerHTML = `El resultado de la division es: ${num1 / num2}`;
            }
            break;
        default:
            resultado.innerHTML = `<b style="color: crimson;">Por favor, seleccione una operacion.</b>`;

    }

}
//     if (isNaN(num1) || isNaN(num2)) {
//     resultado.innerHTML = `<b style="color: crimson;">Los Caampos Están Vacíos</b>`;
//     return; 
// }


// switch(eleccion) {
//     case "suma":
//         resultado.innerHTML = `El resultado de la suma es: ${num1 + num2}`;
//         break;

//     case "resta":
//         resultado.innerHTML = `El resultado de la resta es: ${num1 - num2}`;
//         break;

//     case "multiplicacion":
//         resultado.innerHTML = `El resultado de la suma es: ${num1 * num2}`;
//         break;

//     case "division":
//         if (num2 === 0) {
//             resultado.innerHTML = `No se pueden realizar divisiones entre 0`;
//         } else {
//             resultado.innerHTML = `Resultado de la division es: ${num1 / num2}`;
//         }
//         break;
//     default:
//         resultado.innerHTML = `<b style="color: crimson;">Por favor seleccione una operacion</b>`;
//     }

// }