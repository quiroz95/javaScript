/*const INTERVALO =10;

console.log("Intervalo sera de " + INTERVALO + " minutos con una constante")
*/
//INTERVALO=15;

/*
var intervalo=15;
console.log("Intervalo sera de " + INTERVALO + " minutos con una variable");
intervalo=20;
console.log("Intervalo sera de " + INTERVALO + " minutos con una variable modificada");
*/

/*
let varb=true;//booleano
let varn=3.141592;77//numerico
let vars="Text string";//cadena
let var1;//indefinido

console.log("Para la variable varb="+varb+" con el tipo de dato="+typeof varb);
console.log("Para la variable varn="+varn+" con el tipo de dato="+typeof varn);
console.log("Para la variable vars="+vars+" con el tipo de dato="+typeof vars);
console.log("Para la variable var1="+var1+" con el tipo de dato="+typeof var1);
*/

//Realizar las siguientes conversiones implicitas

let var1=15.25;
let var2=0;
let var3=true;
let var4="100";
let varx;
varx=var1;
/*
varx=var2;
console.log("Para la variable var1="+varx+" con el tipo de dato="+typeof varx);
varx=var3;
console.log("Para la variable var1="+varx+" con el tipo de dato="+typeof varx);
varx=var4;
console.log("Para la variable var1="+varx+" con el tipo de dato="+typeof varx);
*/

//Conversiones explicitas.

varx=var1+var2;//Dentro implicitas
console.log("Para la variable var1="+varx+" con el tipo de dato="+typeof varx);

var3=Boolean(var2)+var3;//Analizarlo
console.log("Para la variable var1="+varx+" con el tipo de dato="+typeof varx);

varx=var1+Number(var4);//Buscar una funcion de conversion.
console.log("Para la variable var1="+varx+" con el tipo de dato="+typeof varx);