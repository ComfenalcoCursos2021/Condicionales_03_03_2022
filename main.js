// Diagrama de flujo bombilla
let boton = function(){
    return Math.trunc(Math.random() * 6);
};
let comenzar = confirm("Desea iniciar el test?");

while(comenzar){
    if(boton() >= 5){
        console.log("ENCENDIO");
        comenzar = false;
    }else{
        console.log("COMPROBANDO CONEXION");
        if(boton() == 3){
            console.log("COMPROBANDO BONBILLA");
            if (boton() == 0) {
                console.log("CAMBIAR NUEVO BOMNILLA");
            }else{
                console.log("LLEVAR AL SERVICIO TECNICO");
                comenzar = false;
            }
        }else{
            console.log("CONECTAR");
        }
    } 
}
