//const getImagenPromesa = () => new Promise(resolve => resolve('https://asdasdasdasdasd.com'))
//getImagenPromesa().then(console.log);

const getImage = async() => {
    
    try { 

    const apiKey = 'fVRXqTunIcVHdRFf52RAu2rhob13PzSE'
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    const {data} = await resp.json();

    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
    console.log(data);
    } catch (error) {
        //Manejo del error
        console.error(error)
    }


}

getImage();

// const apiKey = 'fVRXqTunIcVHdRFf52RAu2rhob13PzSE'

// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

// peticion
//     .then(resp => resp.json())
//     .then( ({data}) => {
//         const {url} = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);
//     })
//     .catch( console.warn );