
const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log( personajes[0]);
// console.log( personajes[1]);
// console.log( personajes[2]);
 
const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = ()=> {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
//1- el primer valor de larr se llamará nombre
//21 se llamará setNombre
const useState = (valor) => {
    return [ valor, ()=>{console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useState('Goku');

console.log(nombre);

setNombre();