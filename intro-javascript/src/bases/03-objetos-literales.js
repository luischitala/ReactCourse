//Console.table para mostrar objetos

const persona = {

    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 55324,
        lat: 14.2351,
        lng: 34.989823,
    }

}
//Tres puntos ... sirve para clonar el objeto
const persona2 = {...persona};
persona2.nombre = 'Peter';

console.table({persona});

console.table({persona2});