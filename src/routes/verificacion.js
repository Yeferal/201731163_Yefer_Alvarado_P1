console.log("Hola por el momento solo es el inicio");

var texto;
var cadena;
var tmp;
var posicion;
var operadores = ["+","-","*","/","%","=","==","<",">",">=","<="];
var agrupadores = ["(",")","{","}"];
var signos = ["\"",";"];
var numeros = ["0","1","2","3","4","5","6","7","8","9"];
function encadenar(){
    // texto=texto1;
    // cadena = (texto.value).split("");
    var nombre= document.getElementById("nombre1");
    cadena=(nombre.value).split("");
    posicion=0;
    
    // alert("nombre: "+cadena);
    
    // verificarEstoA(cadena[posicion]);
}
module.exports.capturar = function(texto1){
    texto=texto1;
    cadena = texto.split("");
    posicion=0;
    console.log("nombre: "+cadena);
    // document.write('Holllliiiiis');
    // verificarEstoA();
}

function verificarEstoFinal(){
    if(verificarTamanio){
        console.log("tamino1: "+cadena.length);
        console.log("tamino2: "+posicion);
        verificarEstoA(cadena[posicion]);
    }else{
        console.log("Todo termino");
    }
}

function verificarTamanio(){
    if(posicion<cadena.length){
        return true;
    }
    console.log("Termino");
    return false;
}

function verificarEstoA(letra){

    switch (letra) {
        case "b":
            
            
            estado19(cadena[posicion]);
            break;
        case "c":
                
                
            estado26(cadena[posicion]);
                break;
        case "d":
                
                
            estado13(cadena[posicion]);
            break;
        case "e":
                
                
            estado8(cadena[posicion]);
            break;
        case "h":
            
            
            estado42(cadena[posicion]);
            break;
        case "m":
                
                
            estado35(cadena[posicion]);
            break;
        case "s":
                if(cadena[posicion+2]==="n"){
                    estado32(cadena[posicion]);
                }else{
                    estado31(cadena[posicion]);
                }
                
            
            break;
        case "v":
                
                
            estado1(cadena[posicion]);
            break;
            case "":
                    if(verificarTamanio){
                        posicion++;
                        verificarEstoFinal();
                    }else{
                        alert("fallo");
                    }
            break;
            case " ":
                    if(verificarTamanio){
                        posicion++;
                        verificarEstoFinal();
                    }else{
                        alert("fallo");
                    }
            break
        default:
            
                alert("fallo");
            
            
            break;
    }


}

function estado1(letra){
    if(letra==="v" && verificarTamanio()){
        
        posicion++;
        estado2(cadena[posicion]);
    }else{

    }
}

function estado2(letra){
    if(letra==="a" && verificarTamanio()){
        
        posicion++;
        estado3(cadena[posicion]);
    }else{

    }
}
function estado3(letra){
    if(letra==="r" && verificarTamanio()){
        
        posicion++;
        estado4(cadena[posicion]);
    }else{

    }
}
function estado4(letra){
    if(letra==="i" && verificarTamanio()){
        
        posicion++;
        estado5(cadena[posicion]);
    }else{

    }
}
function estado5(letra){
    if(letra==="a" && verificarTamanio()){
        
        posicion++;
        estado6(cadena[posicion]);
    }else{

    }
}
function estado6(letra){
    if(letra==="b" && verificarTamanio()){
        
        posicion++;
        estado7(cadena[posicion]);
    }else{

    }
}
function estado7(letra){
    if(letra==="l" && verificarTamanio()){
        
        posicion++;
        estado50(cadena[posicion]);
    }else{

    }
}
function estado50(letra){

    switch(letra){
        case "e":
                datos.innerHTML = datos.innerHTML+"<tr><td>"+"variable"+"</td><td>";
                posicion++;
                alert("variable");
                verificarEstoFinal();
                //verificarEstoA
        break;
        case "o":
            if(cadena[posicion-2]==="e"){
                datos.innerHTML = datos.innerHTML+"<tr><td>"+"Entero"+"</td><td>";
                posicion++;
                alert("entero");
                verificarEstoFinal();
            }else if(cadena[posicion-2]==="a"){
                datos.innerHTML = datos.innerHTML+"<tr><td>"+"booleano"+"</td><td>";
                posicion++;
                alert("booleano");
                verificarEstoFinal();
            }else if(cadena[posicion-2]==="i"){
                datos.innerHTML = datos.innerHTML+"<tr><td>"+"sino"+"</td><td>";
                posicion++;
                alert("sino");
                verificarEstoFinal();
            }
        break;
        case "l":
                datos.innerHTML = datos.innerHTML+"<tr><td>"+"decimal"+"</td><td>";
                posicion++;
                alert("decimal");
                verificarEstoFinal();
        break;
        case "a":
                datos.innerHTML = datos.innerHTML+"<tr><td>"+""+"</td><td>";
                posicion++;
                alert("");
                verificarEstoFinal();
        break;
        case "i":
                datos.innerHTML = datos.innerHTML+"<tr><td>"+"si"+"</td><td>";
                posicion++;
                alert("si");
                verificarEstoFinal();
        break;
        case "s":
                datos.innerHTML = datos.innerHTML+"<tr><td>"+"mientras"+"</td><td>";
                posicion++;
                alert("mientras");
                verificarEstoFinal();
        break;
        case "r":
                datos.innerHTML = datos.innerHTML+"<tr><td>"+"hacer"+"</td><td>";
                posicion++;
                alert("hacer");
                verificarEstoFinal();
        break;
        case "":
                datos.innerHTML = datos.innerHTML+"<tr><td>"+""+"</td><td>";
                posicion++;
                alert("");
                verificarEstoFinal();
        break;
        case "":
                datos.innerHTML = datos.innerHTML+"<tr><td>"+""+"</td><td>";
                posicion++;
                alert("Termino");
        break;
    }
}





function estado8(letra){
    if(letra==="e" && verificarTamanio()){
        posicion++;
        estado9(cadena[posicion]);
    }else{

    }
}
function estado9(letra){
    if(letra==="n" && verificarTamanio()){
        posicion++;
        estado10(cadena[posicion]);
    }else{

    }
}
function estado10(letra){
    if(letra==="t" && verificarTamanio()){
        posicion++;
        estado11(cadena[posicion]);
    }else{

    }
}
function estado11(letra){
    if(letra==="e" && verificarTamanio()){
        posicion++;
        estado12(cadena[posicion]);
    }else{

    }
}
function estado12(letra){
    if(letra==="r" && verificarTamanio()){
        posicion++;
        estado50(cadena[posicion]);
    }else{

    }
}
function estado13(letra){
    if(letra==="d" && verificarTamanio()){
        posicion++;
        estado14(cadena[posicion]);
    }else{

    }
}
function estado14(letra){
    if(letra==="e" && verificarTamanio()){
        posicion++;
        estado15(cadena[posicion]);
    }else{

    }
}
function estado15(letra){
    if(letra==="c" && verificarTamanio()){
        posicion++;
        estado16(cadena[posicion]);
    }else{

    }
}
function estado16(letra){
    if(letra==="i" && verificarTamanio()){
        posicion++;
        estado17(cadena[posicion]);
    }else{

    }
}
function estado17(letra){
    if(letra==="m" && verificarTamanio()){
        posicion++;
        estado18(cadena[posicion]);
    }else{

    }
}
function estado18(letra){
    if(letra==="a" && verificarTamanio()){
        posicion++;
        estado50(cadena[posicion]);
    }else{

    }
}
function estado19(letra){
    if(letra==="b" && verificarTamanio()){
        posicion++;
        estado20(cadena[posicion]);
    }else{

    }
}
function estado20(letra){
    if(letra==="o" && verificarTamanio()){
        posicion++;
        estado21(cadena[posicion]);
    }else{

    }
}
function estado21(letra){
    if(letra==="o" && verificarTamanio()){
        posicion++;
        estado22(cadena[posicion]);
    }else{

    }
}
function estado22(letra){
    if(letra==="l" && verificarTamanio()){
        posicion++;
        estado23(cadena[posicion]);
    }else{

    }
}
function estado23(letra){
    if(letra==="e" && verificarTamanio()){
        posicion++;
        estado24(cadena[posicion]);
    }else{

    }
}
function estado24(letra){
    if(letra==="a" && verificarTamanio()){
        posicion++;
        estado25(cadena[posicion]);
    }else{

    }
}
function estado25(letra){
    if(letra==="n" && verificarTamanio()){
        posicion++;
        estado50(cadena[posicion]);
    }else{

    }
}
function estado26(letra){
    if(letra==="c" && verificarTamanio()){
        posicion++;
        estado27(cadena[posicion]);
    }else{

    }
}
function estado27(letra){
    if(letra==="a" && verificarTamanio()){
        posicion++;
        estado28(cadena[posicion]);
    }else{

    }
}
function estado28(letra){
    if(letra==="d" && verificarTamanio()){
        posicion++;
        estado29(cadena[posicion]);
    }else{

    }
}
function estado29(letra){
    if(letra==="e" && verificarTamanio()){
        posicion++;
        estado30(cadena[posicion]);
    }else{

    }
}
function estado30(letra){
    if(letra==="n" && verificarTamanio()){
        posicion++;
        estado50(cadena[posicion]);
    }else{

    }
}
function estado31(letra){
    if(letra==="s" && verificarTamanio()){
        posicion++;
        estado50(cadena[posicion]);
    }else{

    }
}
function estado32(letra){
    if(letra==="s" && verificarTamanio()){
        posicion++;
        estado33(cadena[posicion]);
    }else{

    }
}
function estado33(letra){
    if(letra==="i" && verificarTamanio()){
        posicion++;
        estado34(cadena[posicion]);
    }else{

    }
}
function estado34(letra){
    if(letra==="n" && verificarTamanio()){
        posicion++;
        estado50(cadena[posicion]);
    }else{

    }
}
function estado35(letra){
    if(letra==="m" && verificarTamanio()){
        posicion++;
        estado36(cadena[posicion]);
    }else{

    }
}
function estado36(letra){
    if(letra==="i" && verificarTamanio()){
        posicion++;
        estado37(cadena[posicion]);
    }else{

    }
}
function estado37(letra){
    if(letra==="e" && verificarTamanio()){
        posicion++;
        estado38(cadena[posicion]);
    }else{

    }
}
function estado38(letra){
    if(letra==="n" && verificarTamanio()){
        posicion++;
        estado50(cadena[posicion]);
    }else{

    }
}
function estado39(letra){
    if(letra==="t" && verificarTamanio()){
        posicion++;
        estado40(cadena[posicion]);
    }else{

    }
}
function estado40(letra){
    if(letra==="r" && verificarTamanio()){
        posicion++;
        estado50(cadena[posicion]);
    }else{

    }
}
function estado41(letra){
    if(letra==="a" && verificarTamanio()){
        posicion++;
        estado50(cadena[posicion]);
    }else{

    }
}
function estado42(letra){
    if(letra==="h" && verificarTamanio()){
        posicion++;
        estado43(cadena[posicion]);
    }else{

    }
}
function estado43(letra){
    if(letra==="4" && verificarTamanio()){
        posicion++;
        estado44(cadena[posicion]);
    }else{

    }
}
function estado44(letra){
    if(letra==="c" && verificarTamanio()){
        posicion++;
        estado45(cadena[posicion]);
    }else{

    }
}
function estado45(letra){
    if(letra==="e" && verificarTamanio()){
        posicion++;
        estado50(cadena[posicion]);
    }else{

    }
}



//adlfkalkdfkasjdlkfjasdlkjflaksdjflkjasdlkfjlaskdjflkajsdlfkjasldkjflakdsjflkajdslkfjasdlkjflakdsjflkajdslfkjas
function estado46(letra){
    for(i = 0;i<operadores.length;i++){
        if(letra===operadores[i]){
            posicion++;
            verificarEstoFinal();
        }else{
            
        }
    }
    
}


function estado47(letra){
    for(i = 0;i<signos.length;i++){
        if(letra===signos[i]){
            posicion++;
            verificarEstoFinal();
        }else{
            
        }
    }
}
function estado48(letra){
    for(i = 0;i<numeros.length;i++){
        if(letra===signos[i]){
            posicion++;
            verificarEstoFinal();
        }else{
            
        }
    }
}
function estado49(letra){
    if(letra===l){
        posicion++;
        estado50(cadena[posicion]);
    }else{

    }
}