// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrayNombres= [];


function agregarAmigo() {
    /*alert ('Click en botón');*/
    let nombre = document.getElementById("amigo").value;
    /*alert (nombre);*/
    if (nombre!=""){
        arrayNombres.push(nombre);
        ///alert("se ha agregado tu nombre correctamente");
        document.getElementById("amigo").value= "";
        RecorrerArreglo();
        
    }
    else {alert("Por favor, ingrese un nombre")};
}

function RecorrerArreglo () {

    let listanombre = document.getElementById("listaAmigos");
    listanombre.innerHTML = "";
    for (let i=0;i<arrayNombres.length; i++){
        listanombre.innerHTML+= `<li>${arrayNombres[i]}</li>`;
    }
    
}
    function sortearAmigo (){
        if(arrayNombres.length==0){
            alert("no se han agregado nombres, favor de ingresarlos");
        }else {
            let numeroRamdom = Math.floor(Math.random() * arrayNombres.length);
            let resultado = document.getElementById("resultado"); 
            resultado.innerHTML= `<li>El amigo secreto es: ${arrayNombres[numeroRamdom]}</li>`;
            document.getElementById("listaAmigos").innerHTML = "";
            arrayNombres = [];
        }

    }
    