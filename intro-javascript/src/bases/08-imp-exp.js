//Arreglar siempre el path
import heroes from '../data/heroes';

// console.log(owners);

// const getHeroeById = (id) => {
//     return heroes.find(( heroe ) => {
//         if (heroe.id === id){
//             return true;
//         }else {
//             return false;
//         }
//     });
// }

export const getHeroeById = (id) => heroes.find(( heroe ) => heroe.id === id);


//console.log(getHeroeById(2));


//Find solo regresa uno, 
//Se utilizará filter
export const getHeroesByOwner = (owner) => heroes.filter(( heroe ) => heroe.owner === owner);

//console.log( getHeroesByOwner('DC'));