//Arreglos en JS

//const arreglo = new Array(100);
const arreglo = [1,2,3,4];
//No se recomienda usar Push
// arreglo.push(1);
// arreglo.push(2);
// arreglo.push(3);
// arreglo.push(4);

//Recordar los tres puntos para la clonación
let arreglo2 = [...arreglo,5];
//arreglo2.push(5);

//Función map
const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);