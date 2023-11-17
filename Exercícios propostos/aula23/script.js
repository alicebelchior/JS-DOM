btn = document.getElementById("btnCalcular");
btn.addEventListener("click", adicionarLinha);

//função para add linha
function adicionarLinha() {
    const num = parseInt(Math.random() * (100) + 1);
    // criando um elemento tr
    const novaLinha = document.createElement("tr");
    // adicionando o txt de dentro da celula
    novaLinha.innerHTML = `<td>${num}</td>`;
    // inserindo a linha criada na tabela 
    document.querySelector("#tabela1").appendChild(novaLinha);
}
