// Diagrama de flujo promedio
let prom, nota1, nota2, nota3;
do{
    nota1 = parseInt(prompt("Ingrese la nota 1"));
    nota2 = parseInt(prompt("Ingrese la nota 2"));
    nota3 = parseInt(prompt("Ingrese la nota 3"));
}while(isNaN(nota1) | isNaN(nota2) | isNaN(nota3));
prom = (nota1 + nota2 + nota3) / 3;
console.log(`Nota 1: ${nota1}, Nota 2: ${nota2}, Nota 3: ${nota3}, Promedio = ${prom}`);
if(prom >= 7){
    console.log("Promocion");
}else if(prom >= 4){
    console.log("Regular");
}else{
    console.log("Reprobado");
}