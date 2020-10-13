//Functional components
// import React, {Fragment} from 'react'
import React from 'react'

const PrimeraApp = ({saludo = 'Hola Mundo'}) => {
    // const saludo = [1,2.3,4,5];
    // const saludo = {
    //     nombre:'Luis',
    //     edad: 25
    // }
    // console.log(props)
    // const saludo = 'Hola Mundo';

    return (
        <>
            {/* <h1>{JSON.stringify(saludo, null, 3)}</h1> */}
            <h1>{saludo}</h1>
            <p>Holahola</p> 
        </>
        );
}

export default PrimeraApp;