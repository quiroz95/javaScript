let notas = [{nombre: 'Juan',nota:0},
{nombre: 'Pedro',nota:0},
{nombre: 'Anderson',nota:0},
{nombre: 'Samuel',nota:0},
{nombre: 'Israel',nota:0},
{nombre: 'Yamil',nota:0},
{nombre: 'Diego',nota:0},
{nombre: 'Robles',nota:0},
{nombre: 'Alexis',nota:0},
{nombre: 'Jose',nota:0}];

function genRandomico($max,$min){
    return Math.floor(Math.random()*($max-$min+1)+2);
}
function cargarNotas(){
    notas.forEach(nota=>{
        nota.nota=genRandomico(10,2);
    });
}
//console.log("NUmero random: "+genRandomico(10,2));

function fclasificar(nota){
        let $clasificar;
        switch(nota){
            case 2: case 3: case 4:
                $clasificar="Insuficiente";
                break;
            case 5: case 6:
                $clasificar="Suficiente";
                break;
            case 7: case 8:
                $clasificar="Bien";
                break;
            case 9: 
                $clasificar="Notable";
                break;
            case 10: 
                $clasificar="Sobresaliente";
                break;
            default:
                $clasificar="Fuera de rango";
        }
        return $clasificar;
}

function impNotas() {
    notas.forEach(nota => {
        console.log(nota.nombre + " - " + nota.nota + ": " + fclasificar(nota.nota) + "\n");
    });
}


cargarNotas();
impNotas();







/*
notas.forEach(nota=>{
    nota.nota=Math.floor(Math.random()*(10-2+1));
});

notas.forEach(nota=>{
    let $clasificar;
    switch(nota.nota){
        case 2: case 3: case 4:
            $clasificar="Insuficiente";
            break;
        case 5: case 6:
            $clasificar="Suficiente";
            break;
        case 7: case 8:
            $clasificar="Bien";
            break;
        case 9: 
            $clasificar="Notable";
            break;
        case 10: 
            $clasificar="Sobresaliente";
            break;
        default:
            $clasificar="Fuera de rango";
    }
    console.log(nota.nombre+" - "+nota.nota+ ": "+$clasificar+"\n");
});
*/