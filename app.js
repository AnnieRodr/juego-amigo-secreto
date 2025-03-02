// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let inputAmigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
let mensajeError = document.getElementById("mensajeError");


let amigo =[];

function limpiarError() {
    mensajeError.style.display = "none";
}

function mostrarError(mensaje) {
    mensajeError.textContent = mensaje;
    mensajeError.style.display = "block";
}

function agregarAmigo(){
    limpiarError(); 

    let nombreAmigo = inputAmigo.value.trim();
    
    if(nombreAmigo === ""){
        mostrarError("Debe ingresar un nombre");
        return;
    }

    let nombreAmigoLower = nombreAmigo.toLowerCase();

    if(amigo.some((amigo) => amigo.toLowerCase() === nombreAmigoLower)){
            mostrarError("El amigo ya fue ingresado");
            return;
    }

    amigo.push(nombreAmigo);

    inputAmigo.value = "";
    inputAmigo.focus();

    mostrarAmigos();
    
}

function mostrarAmigos(){
    listaAmigos.innerHTML = "";

    amigo.forEach((nombre) => {
        let item = document.createElement("li");
        item.textContent = nombre;
        listaAmigos.appendChild(item);
    });
  
}

function sortearAmigo(){
    if(amigo.length === 0){
        alert("Debe agregar amigos para sortear");
        return;
    }
    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    resultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;

}

inputAmigo.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
          agregarAmigo(); 
    }
  });