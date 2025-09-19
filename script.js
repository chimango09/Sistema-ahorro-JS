function calcularAhorro(dinero,porcentaje){
    return dinero * (porcentaje/100)
}

function suma(n1,n2){
    return n1+n2
}

function resta(n1,n2){
    return n1-n2
}

function multiplicacion(n1,n2){
    return n1*n2
}

function division(n1,n2){
    if (n2!=0){
        return n1/n2
    } else{
        alert("La divison por cero no esta permitida")
    }
}

function guardarIngreso(ingreso){
    ingresos.push(ingreso)
}

function ultimoIngreso(){
    let indice = (ingresos.length - 1)
    let ultimo_ing = ingresos[indice]
    alert("Su ultimo ingreso es de: "+ ultimo_ing)
}

function mostrarTodo(){
    let mostrarIngresos = ingresos.join("\n - ")
    alert("Los ingresos guardados son los siguientes: \n - " + mostrarIngresos)
    console.log(ingresos)
}

const ingresos = [5000,1000,3000,4000]

let seguir = true

while (seguir){
    let opcion = parseInt(prompt("Bienvendido/a! \n ¿Que desea hacer? \n 1- Calcular ahorro \n 2- Calculadora \n 3-Consultar ultimo ingreso \n 4-Consultar todos los registros \n 5-Salir "))
    if (opcion === 5){
        seguir = false
    } else {
        switch (opcion){
            case 1:
                let sueldo = parseFloat(prompt("Por favor ingrese su sueldo: "))
                let ahorro = parseInt(prompt("¿Que porcentaje desea ahorrar?"))
                let resultado = calcularAhorro(sueldo,ahorro)
                alert("El ahorro calculado es de: " + resultado)
                let guardar = prompt("Desea guardar el resultado? (S / N)")
                if (guardar === "S"){
                    guardarIngreso()
                    alert("El resultado a sido guardado correctamente")
                    
                }
                break
                ;
            case 2:
                let opcionCalculadora = parseInt(prompt("¿Que operacion desea realizar? \n 1- Suma \n 2-Resta \n 3-Multiplicacion \n 4-Division"))
                let numero1 = parseInt(prompt("Ingrese el primer digito: "))
                let numero2 = parseInt(prompt("Ingrese el segundo digito: "))
                switch (opcionCalculadora){
                    case 1:
                        let resultado_suma = suma(numero1,numero2)  
                        alert("El resultado de la suma es: "+ resultado_suma)
                        break
                        ;
                    case 2:
                        let resultado_resta = resta(numero1,numero2)  
                        alert("El resultado de la resta es: "+ resultado_resta)
                        break
                        ;
                    case 3:
                        let resultado_multi = multiplicacion(numero1,numero2)  
                        alert("El resultado de la multiplicacion es: "+ resultado_multi)
                        break
                        ;
                    case 4:
                        let resultado_div = division(numero1,numero2)  
                        alert("El resultado de la division es: "+ resultado_div)
                        break
                        ;
                    default:
                        alert("Seleccione una opcion valida!")    
                    ;
                }
                break
            case 3:
                ultimoIngreso()
                break
            ;
            case 4:
                mostrarTodo()
                break    
            ;
            default:
                alert("Opcion incorrecta, vuelva a intentarlo")    
            ;

        }
    }
}




