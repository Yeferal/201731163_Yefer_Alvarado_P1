console.log("Hola por el momento solo es el inicio");

var texto;
var cadena;
var tmp;
var posicion;
var operadores = ["+","-","*","/","%","=","==","<",">",">=","<="];
var agrupadores = ["(",")","{","}"];
var signos = ["“",";","”"];
var numeros = ["0","1","2","3","4","5","6","7","8","9"];
var tipo;
var fila;

module.exports.informacion = function(){
    return tmp;
}
module.exports.filas = function(){
    return fila;
}
module.exports.tipoT = function(){
    return tipo;
}
module.exports.verificar = verificarEstoFinal;

module.exports.capturar = function(texto1){
    texto=texto1;
    cadena = texto;
    posicion=0;
    fila=1;
    tmp = "";
    tipo = "";
    // document.write('Holllliiiiis');
    // verificarEstoA(cadena[0]);
}

//verificar i ya se ah llegado al final del texto
function verificarEstoFinal(){
    if(posicion<cadena.length){
        tmp = "";
        tipo = "";
        verificarEstoA(cadena[posicion]);
    }else{
        console.log("Todo termino");
    }
}
//verifica el tamanio del texto
function verificarTamanio(){
    if(posicion<cadena.length){
        return true;
    }
    console.log("Termino");
    return false;
}
//este es el primer estado que analiza los estados iniciales
function verificarEstoA(letra){

    console.log("tOken: "+letra);
    switch (letra) {
        case "b":
            
            tmp = "";
            estado19(cadena[posicion]);
            break;
        case "c":
                
            tmp = "";
            estado26(cadena[posicion]);
                break;
        case "d":
                
            tmp = "";
            estado13(cadena[posicion]);
            break;
        case "e":
                
            tmp = "";
            estado8(cadena[posicion]);
            break;
        case "h":
            
            tmp = "";
            estado42(cadena[posicion]);
            break;
        case "m":
                
            tmp = "";  
            estado35(cadena[posicion]);
            break;
        case "s":
                if(cadena[posicion+2]==="n"){
                    tmp = "";
                    estado32(cadena[posicion]);
                
                }else if(cadena[posicion+1]==="i"){
                    tmp = "";
                    estado31(cadena[posicion]);
                }
                else{
                    tmp = "";
                    estado51(cadena[posicion]);
                }
                
            
            break;
        case "v":
                
            tmp = "";
            estado1(cadena[posicion]);
            break;
        case "":
                    if(verificarTamanio){
                        posicion++;
                        verificarEstoFinal();
                    }else{
                        console.log("fallo");
                    }
            break;
        case " ":
                    if(verificarTamanio){
                        posicion++;
                        verificarEstoFinal();
                    }else{
                        console.log("fallo");
                    }
            break
        case "\n":
                    posicion++;
                    fila++;
                    verificarEstoFinal();
            break;
        case "V":
                    if(cadena[posicion]==="V" && cadena[posicion+1]==="E" && cadena[posicion+2]==="R" && cadena[posicion+3]==="D" && cadena[posicion+4]==="A" && cadena[posicion+5]==="D" && cadena[posicion+6]==="E" && cadena[posicion+7]==="R" && cadena[posicion+8]==="O"){
                        posicion = posicion+8;
                        tmp="VERDADERO";
                    }else{
                        estado51(cadena[posicion]);
                    }
            break;
        case "F":
                if(cadena[posicion]==="F" && cadena[posicion+1]==="A" && cadena[posicion+2]==="L" && cadena[posicion+3]==="S" && cadena[posicion+4]==="O"){
                    posicion = posicion+4;
                    tmp = "FALSO";
                }else{
                    estado51(cadena[posicion]);
                }
    
            break;
        default:
            if(estado46(cadena[posicion])){
                posicion++;
                // verificarEstoFinal();
            }else if(estado47(cadena[posicion])){
                posicion++;
                // verificarEstoFinal();
            }
            else if(estado48(cadena[posicion])){
                posicion++;
                // verificarEstoFinal();
            }
            else if(estado49(cadena[posicion])){
                posicion++;
                // verificarEstoFinal();
            }
            else{
                console.log("entra en cualquiera");
                estado51(cadena[posicion]);
            }
            break;
    }


}
//los siguientes metodos son los estados de evaluzacion de cada caractes para el automata
function estado1(letra){
    if(letra==="v" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado2(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}

function estado2(letra){
    if(letra==="a" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado3(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado3(letra){
    if(letra==="r" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado4(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado4(letra){
    if(letra==="i" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado5(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado5(letra){
    if(letra==="a" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado6(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado6(letra){
    if(letra==="b" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado7(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado7(letra){
    if(letra==="l" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado50(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
//este es el estado final de aceptacion de los tokens
function estado50(letra){

    switch(letra){
        case "e":
                tipo ="Palabra Reservada";
                tmp = "variable";
                posicion++;
                console.log(tmp);
                // verificarEstoFinal();
                //verificarEstoA
        break;
        case "o":
            if(cadena[posicion-2]==="e"){
                tipo ="Palabra Reservada";
                tmp = "entero";
                posicion++;
                console.log("entero");
                // verificarEstoFinal();
            }else if(cadena[posicion-2]==="a"){
                tipo ="Palabra Reservada";
                tmp = "booleano";
                posicion++;
                console.log("booleano");
                verificarEstoFinal();
            }else if(cadena[posicion-2]==="i"){
                tipo ="Palabra Reservada";
                tmp = "sino";
                posicion++;
                console.log("sino");
                // verificarEstoFinal();
            }
        break;
        case "l":
                tipo ="Palabra Reservada";
                tmp = "decimal";
                posicion++;
                console.log("decimal");
                // verificarEstoFinal();
        break;
        case "a":
                tipo ="Palabra Reservada";
                tmp = "cadena";
                posicion++;
                console.log("cadena");
                // verificarEstoFinal();
        break;
        case "i":
                tipo ="Palabra Reservada";
                tmp = "si";
                posicion++;
                console.log("si");
                // verificarEstoFinal();
        break;
        case "s":
                tipo ="Palabra Reservada";
                tmp = "mientras";
                posicion++;
                console.log("mientras");
                // verificarEstoFinal();
        break;
        case "r":
                tipo ="Palabra Reservada";
                tmp = "hacer";
                posicion++;
                console.log("hacer");
                // verificarEstoFinal();
        break;
    }
}





function estado8(letra){
    if(letra==="e" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado9(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado9(letra){
    if(letra==="n" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado10(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado10(letra){
    if(letra==="t" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado11(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado11(letra){
    if(letra==="e" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado12(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado12(letra){
    if(letra==="r" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado50(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado13(letra){
    if(letra==="d" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado14(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado14(letra){
    if(letra==="e" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado15(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado15(letra){
    if(letra==="c" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado16(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado16(letra){
    if(letra==="i" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado17(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado17(letra){
    if(letra==="m" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado18(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado18(letra){
    if(letra==="a" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado50(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado19(letra){
    if(letra==="b" && verificarTamanio()){
        tmp = cadena[posicion];
        posicion++;
        estado20(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);

    }
}
function estado20(letra){
    if(letra==="o" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado21(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado21(letra){
    if(letra==="o" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado22(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado22(letra){
    if(letra==="l" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado23(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado23(letra){
    if(letra==="e" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado24(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado24(letra){
    if(letra==="a" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado25(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado25(letra){
    if(letra==="n" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado50(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado26(letra){
    if(letra==="c" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado27(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado27(letra){
    if(letra==="a" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado28(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado28(letra){
    if(letra==="d" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado29(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado29(letra){
    if(letra==="e" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado30(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado30(letra){
    if(letra==="n" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado50(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado31(letra){
    if(letra==="s" && verificarTamanio() ){
        tmp = tmp + cadena[posicion];
            posicion++;
            estado50(cadena[posicion]);
    }else{
        estado51(cadena[posicion]);
    }
}
function estado32(letra){
    if(letra==="s" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado33(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado33(letra){
    if(letra==="i" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado34(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado34(letra){
    if(letra==="n" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado50(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado35(letra){
    if(letra==="m" && verificarTamanio()){
        tmp = cadena[posicion];
        posicion++;
        estado36(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado36(letra){
    if(letra==="i" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado37(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado37(letra){
    if(letra==="e" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado38(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado38(letra){
    if(letra==="n" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado39(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado39(letra){
    
    if(letra==="t" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado40(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado40(letra){
    if(letra==="r" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado41(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado41(letra){
    if(letra==="a" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado50(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}

function estado53(letra){
    if(letra==="s" && verificarTamanio()){
        posicion++;
        estado50(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}



function estado42(letra){
    if(letra==="h" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado43(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado43(letra){
    if(letra==="a" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado44(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado44(letra){
    if(letra==="c" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
        posicion++;
        estado45(cadena[posicion]);
    }else{
        posicion--;
        estado51(cadena[posicion]);
    }
}
function estado45(letra){
    if(letra==="e" && verificarTamanio()){
        tmp = tmp + cadena[posicion];
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
    for(i = 0;i<operadores.length;i++){
        if(letra===operadores[i]){
            tmp = cadena[posicion];
            tipo = "Operador"
            return true;
        }
    }
    return false;
    
}

//analiza los  signos
function estado47(letra){
    for(i = 0;i<signos.length;i++){
        if(letra===signos[i]  && verificarTamanio()){
            tmp = cadena[posicion];
            tipo = "Signo"
            return true;
        }
    }
    return false;
}
//analiza el numero
function estado48(letra){
    for(i = 0;i<numeros.length;i++){
        if(letra===numeros[i]  && verificarTamanio()){
            tmp = cadena[posicion];
            tipo = "Entero"
            
            return true;
        }else if(letra==="."  && verificarTamanio()){
            tmp = cadena[posicion];
            tipo = "Flotante"
            
            return true;
        }
    }
    return false;
}
//agrupador
function estado49(letra){
    for(i = 0;i<agrupadores.length;i++){
        if(letra===agrupadores[i]  && verificarTamanio()){
            tmp = cadena[posicion];
            tipo = "Agrupador"
            return true;
        }
    }
    return false;
}
function estado51(letra){
        tmp = tmp + cadena[posicion];
        tipo = "Identificador"
        posicion++;
        if(cadena[posicion]!="" && cadena[posicion]!=" " && cadena[posicion]!="\n" && !verificarSigno(cadena[posicion]) && !verificarOperador(cadena[posicion]) && !verificarAgrupador(cadena[posicion])){
        estado51(cadena[posicion]);
        }
        
        // verificarEstoFinal();
}


//analiza los  signos
function verificarSigno(letra){
    for(i = 0;i<signos.length;i++){
        if(letra===signos[i]  && verificarTamanio()){

            return true;
        }
    }
    return false;
}
//operador
function verificarOperador(letra){
    for(i = 0;i<operadores.length;i++){
        if(letra===operadores[i]){
            return true;
        }
    }
    return false;
    
}
//agrupador
function verificarAgrupador(letra){
    for(i = 0;i<agrupadores.length;i++){
        if(letra===agrupadores[i]  && verificarTamanio()){
            return true;
        }
    }
    return false;
}