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
    cadena = texto;
    posicion=0;
    console.log(cadena);
    // document.write('Holllliiiiis');
    verificarEstoA(cadena[0]);
}


function verificarEstoFinal(){
    if(posicion<cadena.length){
        console.log(verificarTamanio);
        console.log("tamino1: "+cadena.length);
        console.log("tamino2: "+posicion);
        verificarEstoA(cadena[posicion]);
    }else{
        console.log(verificarTamanio);
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

    console.log("h:"+letra+":h");
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
                
                }else if(cadena[posicion+1]==="i"){
                    console.log(cadena[posicion]+cadena[posicion+1])
                    estado31(cadena[posicion]);
                }
                else{
                    estado51(cadena[posicion]);
                }
                
            
            break;
        case "v":
                
                
            estado1(cadena[posicion]);
            break;
        case '':
                console.log("sin espacion");
                    if(verificarTamanio){
                        posicion++;
                        verificarEstoFinal();
                    }else{
                        console.log("fallo");
                    }
            break;
        case ' ':
                console.log("especio");
                    if(verificarTamanio){
                        posicion++;
                        verificarEstoFinal();
                    }else{
                        console.log("fallo");
                    }
            break
        case "\n":
                    posicion++;
                    verificarEstoFinal();
            break;
        default:
            console.log("Todos");
            if(estado46(cadena[posicion])){
                posicion++;
                verificarEstoFinal();
            }else if(estado47(cadena[posicion])){
                posicion++;
                verificarEstoFinal();
            }
            else if(estado48(cadena[posicion])){
                posicion++;
                verificarEstoFinal();
            }
            else if(estado49(cadena[posicion])){
                posicion++;
                verificarEstoFinal();
            }
            else{
                console.log("entra en cualquiera");
                estado51(cadena[posicion]);
            }
            
            
            
            
            // if(verificarTamanio){
            //     posicion++;
            //     verificarEstoFinal();
            // }
            // verificarEstoFinal();
            
            
            break;
    }


}

function estado1(letra){
    if(letra==="v" && verificarTamanio()){
        
        posicion++;
        estado2(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}

function estado2(letra){
    if(letra==="a" && verificarTamanio()){
        
        posicion++;
        estado3(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado3(letra){
    if(letra==="r" && verificarTamanio()){
        
        posicion++;
        estado4(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado4(letra){
    if(letra==="i" && verificarTamanio()){
        
        posicion++;
        estado5(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado5(letra){
    if(letra==="a" && verificarTamanio()){
        
        posicion++;
        estado6(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado6(letra){
    if(letra==="b" && verificarTamanio()){
        
        posicion++;
        estado7(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado7(letra){
    if(letra==="l" && verificarTamanio()){
        
        posicion++;
        estado50(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado50(letra){

    switch(letra){
        case "e":
                // datos.innerHTML = datos.innerHTML+"<tr><td>"+"variable"+"</td><td>";
                posicion++;
                console.log("variable");
                verificarEstoFinal();
                //verificarEstoA
        break;
        case "o":
            if(cadena[posicion-2]==="e"){
                // datos.innerHTML = datos.innerHTML+"<tr><td>"+"Entero"+"</td><td>";
                posicion++;
                console.log("entero");
                verificarEstoFinal();
            }else if(cadena[posicion-2]==="a"){
                // datos.innerHTML = datos.innerHTML+"<tr><td>"+"booleano"+"</td><td>";
                posicion++;
                console.log("booleano");
                verificarEstoFinal();
            }else if(cadena[posicion-2]==="i"){
                // datos.innerHTML = datos.innerHTML+"<tr><td>"+"sino"+"</td><td>";
                posicion++;
                console.log("sino");
                verificarEstoFinal();
            }
        break;
        case "l":
                // datos.innerHTML = datos.innerHTML+"<tr><td>"+"decimal"+"</td><td>";
                posicion++;
                console.log("decimal");
                verificarEstoFinal();
        break;
        case "a":
                // datos.innerHTML = datos.innerHTML+"<tr><td>"+""+"</td><td>";
                posicion++;
                console.log("");
                verificarEstoFinal();
        break;
        case "i":
                // datos.innerHTML = datos.innerHTML+"<tr><td>"+"si"+"</td><td>";
                posicion++;
                console.log("si");
                verificarEstoFinal();
        break;
        case "s":
                // datos.innerHTML = datos.innerHTML+"<tr><td>"+"mientras"+"</td><td>";
                posicion++;
                console.log("mientras");
                verificarEstoFinal();
        break;
        case "r":
                // datos.innerHTML = datos.innerHTML+"<tr><td>"+"hacer"+"</td><td>";
                posicion++;
                console.log("hacer");
                verificarEstoFinal();
        break;
        case "":
                // datos.innerHTML = datos.innerHTML+"<tr><td>"+""+"</td><td>";
                posicion++;
                console.log("");
                verificarEstoFinal();
        break;
        case " ":
                // datos.innerHTML = datos.innerHTML+"<tr><td>"+""+"</td><td>";
                posicion++;
                console.log("Termino");
        break;
    }
}





function estado8(letra){
    if(letra==="e" && verificarTamanio()){
        posicion++;
        estado9(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado9(letra){
    if(letra==="n" && verificarTamanio()){
        posicion++;
        estado10(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado10(letra){
    if(letra==="t" && verificarTamanio()){
        posicion++;
        estado11(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado11(letra){
    if(letra==="e" && verificarTamanio()){
        posicion++;
        estado12(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado12(letra){
    if(letra==="r" && verificarTamanio()){
        posicion++;
        estado50(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado13(letra){
    if(letra==="d" && verificarTamanio()){
        posicion++;
        estado14(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado14(letra){
    if(letra==="e" && verificarTamanio()){
        posicion++;
        estado15(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado15(letra){
    if(letra==="c" && verificarTamanio()){
        posicion++;
        estado16(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado16(letra){
    if(letra==="i" && verificarTamanio()){
        posicion++;
        estado17(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado17(letra){
    if(letra==="m" && verificarTamanio()){
        posicion++;
        estado18(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado18(letra){
    if(letra==="a" && verificarTamanio()){
        posicion++;
        estado50(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado19(letra){
    if(letra==="b" && verificarTamanio()){
        posicion++;
        estado20(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);

    }
}
function estado20(letra){
    if(letra==="o" && verificarTamanio()){
        posicion++;
        estado21(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado21(letra){
    if(letra==="o" && verificarTamanio()){
        posicion++;
        estado22(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado22(letra){
    if(letra==="l" && verificarTamanio()){
        posicion++;
        estado23(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado23(letra){
    if(letra==="e" && verificarTamanio()){
        posicion++;
        estado24(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado24(letra){
    if(letra==="a" && verificarTamanio()){
        posicion++;
        estado25(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado25(letra){
    if(letra==="n" && verificarTamanio()){
        posicion++;
        estado50(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado26(letra){
    if(letra==="c" && verificarTamanio()){
        posicion++;
        estado27(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado27(letra){
    if(letra==="a" && verificarTamanio()){
        posicion++;
        estado28(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado28(letra){
    if(letra==="d" && verificarTamanio()){
        posicion++;
        estado29(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado29(letra){
    if(letra==="e" && verificarTamanio()){
        posicion++;
        estado30(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado30(letra){
    if(letra==="n" && verificarTamanio()){
        posicion++;
        estado50(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado31(letra){
    if(letra==="s" && verificarTamanio() ){
            console.log("Entro is");
            posicion++;
            estado50(cadena[posicion]);
    }else{
        console.log("Entro no s");
        estado51(cadena[posicion]);
    }
}
function estado32(letra){
    if(letra==="s" && verificarTamanio()){
        posicion++;
        estado33(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado33(letra){
    if(letra==="i" && verificarTamanio()){
        posicion++;
        estado34(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado34(letra){
    if(letra==="n" && verificarTamanio()){
        posicion++;
        estado50(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado35(letra){
    if(letra==="m" && verificarTamanio()){
        console.log("letra m")
        posicion++;
        estado36(cadena[posicion]);
    }else{
        console.log("letra salio")
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado36(letra){
    if(letra==="i" && verificarTamanio()){
        console.log("letra i")
        posicion++;
        estado37(cadena[posicion]);
    }else{
        console.log("letra salio")
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado37(letra){
    if(letra==="e" && verificarTamanio()){
        console.log("letra e")
        posicion++;
        estado38(cadena[posicion]);
    }else{
        console.log("letra salio")
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado38(letra){
    if(letra==="n" && verificarTamanio()){
        console.log("letra n")
        posicion++;
        estado39(cadena[posicion]);
    }else{
        console.log("letra salio")
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado39(letra){
    
    if(letra==="t" && verificarTamanio()){
        console.log("letra t")
        posicion++;
        estado40(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado40(letra){
    if(letra==="r" && verificarTamanio()){
        console.log("letra r")
        posicion++;
        estado41(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado41(letra){
    if(letra==="a" && verificarTamanio()){
        console.log("letra a")
        posicion++;
        estado50(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}

function estado53(letra){
    if(letra==="s" && verificarTamanio()){
        console.log("letra s")
        posicion++;
        estado50(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}



function estado42(letra){
    if(letra==="h" && verificarTamanio()){
        posicion++;
        estado43(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado43(letra){
    if(letra==="4" && verificarTamanio()){
        posicion++;
        estado44(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado44(letra){
    if(letra==="c" && verificarTamanio()){
        posicion++;
        estado45(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado45(letra){
    if(letra==="e" && verificarTamanio()){
        posicion++;
        estado50(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}



//adlfkalkdfkasjdlkfjasdlkjflaksdjflkjasdlkfjlaskdjflkajsdlfkjasldkjflakdsjflkajdslkfjasdlkjflakdsjflkajdslfkjas
//opradores analiza posionc de arreglo
function estado46(letra){
    console.log("Entra 1");
    for(i = 0;i<operadores.length;i++){
        if(letra===operadores[i]){
            console.log("Es un signo");
            return true;
        }
    }
    return false;
    
}

//analiza los  signos
function estado47(letra){
    console.log("Entra 2");
    for(i = 0;i<signos.length;i++){
        if(letra===signos[i]  && verificarTamanio()){
            console.log("Es un signo");
            return true;
        }
    }
    return false;
}
//analiza el numero
function estado48(letra){
    console.log("Entra 3");
    for(i = 0;i<numeros.length;i++){
        if(letra===numeros[i]  && verificarTamanio()){
            console.log("Es un entero");
            
            return true;
        }else if(letra==="."  && verificarTamanio()){
            console.log("Es un Flotante");
            
            return true;
        }
    }
    return false;
}
function estado49(letra){
    console.log("Entra 4");
    for(i = 0;i<agrupadores.length;i++){
        if(letra===agrupadores[i]  && verificarTamanio()){
            console.log("Es un Agrupador")
            return true;
        }
    }
    return false;
}
function estado51(letra){
        console.log("es una letra");
        posicion++;
        verificarEstoFinal();

       
}