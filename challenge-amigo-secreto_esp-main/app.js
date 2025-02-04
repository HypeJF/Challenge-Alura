// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//3-2-25

let participantes = [];

function agregarAmigo() {
    var nombre = document.getElementById("amigo").value;
    if (nombre == "") {
        alert("Por favor, ingrese un nombre.");
        return;
    } else {
        participantes.push(nombre);
        console.log(participantes);
        document.getElementById("amigo").value = "";
    }
    
}