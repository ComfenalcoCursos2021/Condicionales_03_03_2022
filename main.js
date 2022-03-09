// Diagrama de flujo ordena 3 numeros
let n1, n2, n3;
do{
    n1 = parseInt(prompt("Ingrese el numero 1"));
    n2 = parseInt(prompt("Ingrese el numero 2"));
    n3 = parseInt(prompt("Ingrese el numero 3"));
}while(isNaN(n1) | isNaN(n2) | isNaN(n3));
if(n1 >= n2 & n1 >= n3){
    console.log("Mayor ",n1);
    if(n2 >= n3){
        console.log("Medio ",n2);
        console.log("Menor ",n3);
    }else{
        console.log("Medio ",n3);
        console.log("Menor ",n2);
    }
}else if(n2 >= n3){
    console.log("Mayor ",n2);
    if(n1 >= n3){
        console.log("Medio ",n1);
        console.log("Menor ",n3);
    }else{
        console.log("Medio ",n3);
        console.log("Menor ",n1);
    }
}else{
    console.log("Mayor ",n3);
    if(n2 >= n1){
        console.log("Medio ",n2);
        console.log("Menor ",n1);
    }else{
        console.log("Medio ",n1);
        console.log("Menor ",n2);
    }
}