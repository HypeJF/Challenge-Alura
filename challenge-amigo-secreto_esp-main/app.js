// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


//3-2-25
//Puse un event listener para ahorrar tiempo en el input
window.addEventListener("keydown",(e)=> {
    if (e.keyCode === 13) {
        agregarAmigo();
    }
})


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
    mostrarListaAmigos(participantes);
}

function mostrarListaAmigos(lista) {
    for (let i = 0; i < lista.length; i++) {
        var list = document.getElementById("listaAmigos");
        var new_li = document.createElement("li");
        new_li.innerHTML = lista[i];
        list.appendChild(new_li);
        lista[i] = "";
} }

function sortearAmigo() {
    document.getElementById("textolista").innerHTML='HolaTexto'
    var list = document.getElementById("listaAmigos");
    var new_li = document.createElement("li");
    new_li.innerHTML = "Texto";
    list.appendChild(new_li);

}

//crear for para recorrer el array de participantes
