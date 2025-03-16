// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrayNombres= [];


function agregarAmigo() {
    /*alert ('Click en botón');*/
    let nombre = document.getElementById("amigo").value;
    /*alert (nombre);*/
    if (nombre!=""){
        arrayNombres.push(nombre);
        alert("se ha agregado tu nombre correctamente");
        document.getElementById("amigo").value= "";
    }
    else {alert("Por favor, ingrese un nombre")};
}
