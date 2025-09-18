// let ingreso = parseInt(prompt("Introduzca su ingreso del mes: "))
// let ahorro = parseInt(prompt("Introduzca el porcentaje que quiere ahorrar: "))


// function aplicarDescuento(ingreso,porcentaje){
//     return ingreso * porcentaje/100
// }

// resultado = aplicarDescuento(ingreso,ahorro)

// let operacion = prompt("Ingrese la operacion a realizar (suma, resta, multiplicacion, division): ")

// let a = parseInt(prompt("Ingrese el primer numero: "))
// let b = parseInt(prompt("Ingrese el segundo numero: "))

// function suma(num1,num2){
//     return num1 + num2
// }

// function resta(num1,num2){
//     return num1 + num2
// }

// function multi(num1,num2){
//     return num1 * num2
// }

// function division(num1,num20){
//     return num1/num2
// }

// let resultado;

// const resultados = []

// switch (operacion){
//     case "suma":
//         resultado = suma(a,b);
//         console.log("El resultado de la suma es: "+resultado)
//         resultados.push(suma)
//         console.log(resultados)
//         break;

//     case "resta":
//         resultado = resta(a,b);
//         console.log("El resultado de la resta es: "+resultado)
//         break

//     case "multiplicacion":
//         resultado = multi (a,b);
//         console.log("El resultado de la multiplicacion es: "+resultado)
//         break

//     case "division":
//         resultado = multi (a,b);
//         console.log("El resultado de la multiplicacion es: "+resultado)
//         break
//     default:
//         console.log("Operacion no valida")
// }

let a = parseInt(prompt("Ingrese el monto que quiere ahorrar: ")) 
let b = parseInt(prompt("Ingrese el porcentaje que quiere ahorrar"))

const calculoAhorro = (ingreso, porcentaje) => {
    return ingreso * porcentaje/100
}

let resultado = calculoAhorro(a,b)

console.log("El monto a ahorrar es de: " + resultado)