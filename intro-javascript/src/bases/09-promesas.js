//Reject no pudo encontrar el heroe
import { getHeroeById } from './bases/08-imp-exp'

//Las processas se crean con callback
// const promesa = new Promise((resolve, reject) =>  {
//     setTimeout(() => {
//         // console.log('2 Segundos después...')
//         //Tarea
//         const heroe = getHeroeById(2);
//         console.log(heroe);
//         //reject(heroe);
//         // reject('No se pudo encontral el héroe');
//         resolve(heroe);
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('Heroe', heroe)
// })
// .catch( err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) =>  {
        setTimeout(() => {
            // console.log('2 Segundos después...')
            //Tarea
            const heroe = getHeroeById(id);
            // console.log(heroe);
            if (heroe){
                resolve(heroe);
            }else{
                reject('No se pudo encontrar el héroe');
            }
            //reject(heroe);
            // reject('No se pudo encontral el héroe');
            resolve(heroe);
        }, 2000);
    });

}
getHeroeByIdAsync(10)
.then(heroe => console.log('Heroe', heroe))
.catch(err => console.warn(err))
