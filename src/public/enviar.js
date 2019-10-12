const respuesta = document.querySelector('#contenido-archivo');
const boton = document.querySelector('#nombre1');
const tabla = document.querySelector('#datos');

const urlp = "http://localhost:3000/analizador";
const url = "http://localhost:3000/obtener";

//envia los datos a la ruta establecida
const sendData = () => {

    axios.post('http://localhost:3000/solicitar', {
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

const getData = () => {
    console.log("Holaaa");
    axios.get(url).then(response => {
            console.log(response.data);
            console.log(response.data.palabra);
            tabla.innerHTML = tabla.innerHTML +"<tr><td>"+response.data.filas+"</td><br><td>"+response.data.palabra+"</td><br><td>"+response.data.tipo+"</td><tr>";
            console.log({tabla});
        })
        .catch(error => {
            console.log(error);
        });
};



getButton.addEventListener('click', sendData);
posButton.addEventListener('click', getData);