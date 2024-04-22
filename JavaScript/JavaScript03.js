/*
Descripcion: Ejemplo de Solicitar 2 numeros e imprimir la suma por consola
Desarrollador:Ruth Alejandra Quiroz Asturizaga 
Fecha: 2024-04-15
Cambios: Ninguno
*/

var num1 = prompt("Ingresa el primer número:");
        var num2 = prompt("Ingresa el segundo número:");

        // Convertir los números ingresados a tipo float
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        // Verificar si ambos números son válidos (no NaN)
        if (!isNaN(num1) && !isNaN(num2)) {
            // Sumar los dos números
            var suma = num1 + num2;
            console.log("La suma de " + num1 + " y " + num2 + " es: " + suma);
        } else {
            console.log("Al menos uno de los valores ingresados no es un número válido.");
        }