//Desestructuración
//Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad:45,
    clave: 'Ironman',
    // rango: 'Soldado'
};

const { nombre,edad,clave } = persona;

// console.log(nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const useContext = ({ clave, nombre,edad, rango = 'Capitan'}) => {
    // const { edad, clave, nombre } = usuario;

    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng:{
            lat:14.132,
            lng:12.3232
        }
    }
}

const { nombreClave, anios, latlng:{ lat, lng}} = useContext(persona);

console.log(nombreClave, anios)
console.log(lat, lng);