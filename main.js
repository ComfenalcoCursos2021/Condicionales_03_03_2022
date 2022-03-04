// Diagrama de flujo para resolver problemas
if(confirm("¿Funciona esta pendejada?")){
    console.log("Ni le Muevas");
}else{
    if(confirm("¿Le moviste Algo?")){
        console.log("!Pedejo¡");
        if(confirm("¿Sabes alguien que le Moviste?")){
            Culpa();
        }else{
            console.log("Hazte Pendejo");
        }
    }else{
        if(confirm("¿Crees que haya pedo?")){
            Culpa();
        }else{
            console.log("Olvidalo");
        }
    }
}
function Culpa(){
    do {
        console.log("¡Ya te Chingaste!");
    }while(!confirm("¿Le puedes echar la culpa a Alguien?"))
} 
console.log("No hay Problema");
 