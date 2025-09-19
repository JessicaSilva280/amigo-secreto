let amigos = [];

function adicionarAmigo(){
  let inputAmigo = document.getElementById("amigo")
  let nomeAmigo = inputAmigo.value.trim();

  if (nomeAmigo === "") {
   alert("Por favor, insira um nome.");
  return;
}

amigos.push(nomeAmigo);
inputAmigo.value = "";
inputAmigo.focus();

atualizarListaDeAmigos(amigos);
}


function atualizarListaDeAmigos(amigos) {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const itemLista = document.createElement("li");
        itemLista.textContent = amigo; 
        lista.appendChild(itemLista);
    }
}

function sortearAmigo(){
    if (amigos.length === 0){
      alert("Por favor, adicione amigos para o sorteio ser realizado.");
      return;
    }
  
    let indiceAleatorio = Math.floor(Math.random() * amigos.length );
    let AmigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = "Seu amigo secreto é :" + AmigoSorteado;
}

function reiniciarJogo() {
  amigos=[];
  document.getElementById("resultado-sorteio").innerHTML = "";
  atualizarListaDeAmigos();
}