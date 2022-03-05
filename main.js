// Diagrama de flujo altura
let Altura = new Number(prompt("CUAL ES TU ALTURA", "1"));
if(Altura <= 150){
    console.log(`PERSONA DE ALTURA BAJA`);
}else if(Altura <= 170){
    console.log(`PERSONA DE ALTURA MEDIA`);
}else if(Altura > 170){
    console.log(`PERSONA ALTA`);
}
