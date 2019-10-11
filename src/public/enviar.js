const respuesta = document.querySelector('#contenido-archivo');
const boton = document.querySelector('#nombre1');

const urlp = "http://localhost:3000/analizador";


const getData = () => {

    axios.post('http://localhost:3000/postusers', {
            text: respuesta.value
            
        }, {
            'Content-Type': 'application/json'
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });

};


getButton.addEventListener('click', getData);