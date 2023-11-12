const container = document.querySelector(#containter);
container.addEventListener("click", trocarCor);

const btn = document.querySelector("button");
btn.addEventListener("click", adicionar);
//com o evento "Listener" o barulho do clique vaichamar a função "adicionar"

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
/*
 o objetivo dessa função é receber um número (255) e gerar como retorno um numero que esteja [1, 255]
 essa função vai retornar um valor dentro do intervalo que vai substituir o numero do local onde ela foi chamada (random(255))
 formando um código rgb, o qual será utilizado pra var rndCor e que será usada no document...
*/
function trocarCor(e) {
    var rndCor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    e.target.style.backgroundColor = rndCor;
}
/*
"e" é o evento.
Quando um quadrado (div-Filha) for clicado, esse evento "e" vai vir como parâmetro para a função trocarCor
O atributo "target" é uma referência para o objeto que enviou o evento, qual elemento foi acionado para que esse evento acontecesse
*/

function adicionar() {
    var div.createElement("div");
    div.className = "quadrado";
    div.style.backgroundColor = "rgb(100,100,100)";
    container.appendChild(div);
}