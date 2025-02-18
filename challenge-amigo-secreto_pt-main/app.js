let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value;

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(nome); 
    atualizarLista();  
    input.value = "";  
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    amigos.forEach(function(nome) {
        lista.innerHTML += "<li>" + nome + "</li>"; 
    });
}

function sortearAmigo() {
    if (amigos.length < 1) {
        alert("Por favor, insira um nome.");
        return;
    }
    
    let indiceSorteado = parseInt(Math.random() * amigos.length); 
    let nomeSorteado = amigos[indiceSorteado];
    
    document.getElementById("resultado").innerHTML = "<li> " + nomeSorteado + " foi sorteado! </li>";
}

