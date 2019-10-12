const respuesta = document.querySelector('#contenido-archivo');
const boton = document.querySelector('#nombre1');
const cantida = document.querySelector('#cantida');
const tabla = document.querySelector('#datos');
const tabla1 = document.querySelector('#datos1');
const tabla2 = document.querySelector('#datos2');
const tabla3 = document.querySelector('#datos3');
const tabla4 = document.querySelector('#datos4');
const tabla5 = document.querySelector('#datos5');
const tabla6 = document.querySelector('#datos6');

var numeros;

const urlp = "http://localhost:3000/analizador";
const url = "http://localhost:3000/obtener";

//envia los datos a la ruta establecida
const sendData = () => {
    numeros = 0;
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
    numeros++;
    axios.get(url).then(response => {
            console.log(response.data);
            console.log(response.data.palabra);
            cantida.innerHTML="Token Analizados:  "+numeros;
            tabla.innerHTML = tabla.innerHTML +"<tr><td>"+response.data.filas+"</td><br><td>"+response.data.palabra+"</td><br><td>"+response.data.tipo+"</td><tr>";
            enviarTabla(response.data.tipo,response.data.palabra,response.data.filas);
            console.log({tabla});
        })
        .catch(error => {
            console.log(error);
        });
};

function enviarTabla(tipot,palabra,fila){
    switch(tipot){
        case "Palabra Reservada":
            tabla1.innerHTML = tabla1.innerHTML +"<tr><td>"+fila+"</td><br><td>"+palabra+"</td><tr>";
        break;
        case "Operador":
                tabla2.innerHTML = tabla2.innerHTML +"<tr><td>"+fila+"</td><br><td>"+palabra+"</td><tr>";
        break;
        case "Agrupador":
                tabla3.innerHTML = tabla3.innerHTML +"<tr><td>"+fila+"</td><br><td>"+palabra+"</td><tr>";
        break;
        case "Signo":
                tabla4.innerHTML = tabla4.innerHTML +"<tr><td>"+fila+"</td><br><td>"+palabra+"</td><tr>";
        break;
        case "Entero":
                tabla5.innerHTML = tabla5.innerHTML +"<tr><td>"+fila+"</td><br><td>"+palabra+"</td><tr>";
        break;
        case "Identificador":
                tabla6.innerHTML = tabla6.innerHTML +"<tr><td>"+fila+"</td><br><td>"+palabra+"</td><tr>";
        break;
    }
}



getButton.addEventListener('click', sendData);
posButton.addEventListener('click', getData);