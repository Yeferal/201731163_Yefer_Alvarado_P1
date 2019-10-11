function leerArchivo(e) {
  var archivo = e.target.files[0];
  if (!archivo) {
    return;
  }
  var lector = new FileReader();
  lector.onload = function(e) {
    var contenido = e.target.result;
    mostrarContenido(contenido);
  };
  lector.readAsText(archivo);
}

function mostrarContenido(contenido) {
  
  var elemento = document.getElementById('contenido-archivo');
  // formulario.innerHTML = "<input type=\"submit\" name=\"bote\" value=\"Analizar\"/><br>"+"</form>";
  elemento.innerHTML =contenido;
  document.getElementById('getButton').style.display = 'inline';
}

document.getElementById('fileinput')
  .addEventListener('change', leerArchivo, false);