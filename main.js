// Diagrama de flujo semana
let Dia = new Number(prompt(`Diga un número para escribir su día`, "1"));
if(Dia == 1){
    console.log("Lunes");
}else if(Dia == 2){
    console.log("Martes");
}else if(Dia == 3){
    console.log("Miércoles");
}else if(Dia == 4){
    console.log("Jueves");
}else if(Dia == 5){
    console.log("Viernes");
}else if(Dia == 6){
    console.log("Sábado");
}else if(Dia == 7){
    console.log("Domingo");
}else{
    console.log("Escribió un número fuera deñ rango 1-7");
}