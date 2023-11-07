function random(number) {
    return Math.floor(Math.random() * (number + 1));
}
/*
 o objetivo dessa função é receber um número (255) e gerar como retorno um numero que esteja [1, 255]
 essa função vai retornar um valor dentro do intervalo que vai substituir o numero do local onde ela foi chamada (random(255))
 formando um código rgb, o qual será utilizado pra var rndCor e que será usada no document...
*/
function trocarCor() {
    var rndCor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    //alert(rndCor);
    document.body.style.backgroundColor = rndCor;
}