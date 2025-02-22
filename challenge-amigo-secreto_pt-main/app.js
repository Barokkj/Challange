let arrayAmigos = []; 

  
function adicionarAmigo() {
    let nome = document.querySelector("input").value; 
         if (nome === "" ){
    alert(
        "Por favor, insira um nome."
    )   ;
}       
        else{
    arrayAmigos.push(nome); 
    
}
       atualizarListaAmigos()
        console.log(arrayAmigos); 
        limparCampo()
}

function limparCampo() {
    nome= document.querySelector("input");
    nome.value= "";
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    arrayAmigos.forEach((arrayAmigos) => {
        const li = document.createElement("li");
        li.textContent = arrayAmigos;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (arrayAmigos.length===0){
        alert("Adicione amigos para poder sortear");
    return;
}
    
    let sorteio = arrayAmigos[Math.floor(Math.random() * arrayAmigos.length)];
    listaAmigos.innerHTML= `o amigo sorteado é ${sorteio}` 
}
