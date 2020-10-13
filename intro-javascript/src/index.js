
import { getHeroeById } from './bases/08-imp-exp'

//Las processas se crean con callback
const promesa = new Promise((resolve, reject) =>  {
    setTimeout(() => {
        // console.log('2 Segundos después...')
        //Tarea
        const heroe = getHeroeById(2);
        console.log(heroe);
        resolve(heroe);
    }, 2000);
});

promesa.then((heroe) => {
    console.log('Heroe', heroe)
})