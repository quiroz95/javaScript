/*
let carrito=["leche",1,"carne",2,"papa",3,"fideos",1];

console.log("Item:"+carrito[0]);
console.log("Cantidad:"+carrito[1]);
console.log("Item:"+carrito[2]);
console.log("Cantidad:"+carrito[3]);
console.log("Item:"+carrito[4]);
console.log("Cantidad:"+carrito[5]);
console.log("Item:"+carrito[6]);
console.log("Cantidad:"+carrito[7]);
console.log("IMPRESION COMPLETA");
console.log(carrito);


//COMO SE ADICIONA UN NUEVO ITEM Y CANTIDAD

// Nuevo ítem y su cantidad
let nuevoItem = "pancito";
let nuevaCantidad = 2;

// Agregar el nuevo ítem y su cantidad al arreglo carrito
carrito.push(nuevoItem, nuevaCantidad);

console.log(carrito);

*/

/*
let carrito=[{nombre: 'Leche',cantidad:1,precio:7.5},
             {nombre: 'Carne',cantidad:2,precio:25},
             {nombre: 'fideo',cantidad:1,precio:10},
             {nombre: 'papa',cantidad:3,precio:6}];

             console.log("Carrito con precios y totales:");
             carrito.forEach((item) => {
               // Calcular precio total
               const precioTotal = item.cantidad * item.precio;
             
               console.log("Nombre: " + item.nombre);
               console.log("Cantidad: " + item.cantidad);
               console.log("Precio: Bs" + item.precio);
               console.log("Precio Total: Bs" + precioTotal);
               
             });

item={nombre: 'cocacola',cantidad:5,precio:15};
carrito.push(item);

let carrito2=[{nombre: 'Leche',cantidad:1,precio:7.5},
{nombre: 'Carne',cantidad:2,precio:25},
{nombre: 'fideo',cantidad:1,precio:10},
{nombre: 'papa',cantidad:3,precio:6}];


/*
const precioTotal = item.cantidad * item.precio;
             
console.log("Nombre: " + item.nombre);
console.log("Cantidad: " + item.cantidad);
console.log("Precio: Bs" + item.precio);
console.log("Precio Total: Bs" + precioTotal);

console.log(carrito);
*/


/*
//Imprimir con Etiquetas
// Iterar sobre cada elemento del carrito
carrito.forEach(item => {
    console.log("Item: " + item.nombre + ", Cantidad: " + item.cantidad);
});

//Adicionar un nuevo registro
// Nuevo registro a agregar
let nuevoRegistro = { nombre: 'arroz', cantidad: 2 };

// Agregar el nuevo registro al arreglo carrito
carrito.push(nuevoRegistro);

// Imprimir el carrito actualizado
console.log(carrito);
*/

/*
// Calcular el total
let total = item.cantidad * item.precio;

// Imprimir cantidad, precio y total
console.log("Cantidad: " + item.cantidad);
console.log("Precio: $" + item.precio);
console.log("Total: $" + total.toFixed(2)); // Redondeamos el total a dos decimales
*/

//Buscar funciones o procesos para ordenar un ARRAY
//Ordenar el array de carrito
//Ordenar un array linial
/*
let numeros=[4,2,6,1,8,3,10];
numeros.sort((a,b)=>a-b);
console.log(numeros);
console.log("IMPRESION ORDENADO POR PRECIO")
carrito.sort((a,b) => a.precio - b.precio);
console.log(carrito);
console.log("IMPRESION ORDENADO POR NOMBRE");
carrito.sort((a,b) => a.nombre.localeCompare(b.nombre));
console.log(carrito);
*/


//Generar un array Nombre:"Juan" Nota: randomico entre 20-100.
//Mostrar la nota mayor, menor y promedio

// Función para generar un número aleatorio entre un rango dado
function generaNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Generar un array de 10 elementos con nombres aleatorios y notas calculadas
  let nombres = [{nombre: 'Juan',nota:0},
  {nombre: 'Pedro',nota:0},
  {nombre: 'Anderson',nota:0},
  {nombre: 'Samuel',nota:0},
  {nombre: 'Israel',nota:0},
  {nombre: 'Yamil',nota:0},
  {nombre: 'Diego',nota:0},
  {nombre: 'Robles',nota:30},
  {nombre: 'Alexis',nota:0},
  {nombre: 'Jose',nota:0}];
  let array = nombres.map(nombre => ({ Nombre: nombre, Nota: generaNumeroAleatorio(20, 100) }));
  
  // Calcular la nota mayor, menor y promedio
  let notas = array.map(objeto => objeto.Nota);
  let notaMayor = Math.max(...notas);
  let notaMenor = Math.min(...notas);
  let promedio = notas.reduce((total, nota) => total + nota, 0) / notas.length;
  
  // Mostrar los resultados
  console.log("Array:", array);
  console.log("Nota mayor:", notaMayor);
  console.log("Nota menor:", notaMenor);
  console.log("Promedio:", promedio.toFixed(2));