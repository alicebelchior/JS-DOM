//setando as variaveis
btnHTML = document.getElementById("btnHTML");
btnCSS = document.getElementById("btnCSS");
btnJS = document.getElementById("btnJS");
imgTecnologia = document.getElementById("imgTecnologia");

//setando o evento
btnHTML.addEventListener("click", showHTML);
btnCSS.addEventListener("click", showCSS);
btnJS.addEventListener("click", showJS);
imgTecnologia.addEventListener("click", showTecnologias);

//setando as funções que os eventos chamam
function showHTML() {
    imgTecnologia.src = "./img/html.png"
    /*
    ao clicar no botao html, o usuario muda o path/source da imagem
    para html
     */

}

function showCSS() {
    imgTecnologia.src = "./img/css.png"

}

function showJS() {
    imgTecnologia.src = "./img/js.png"

}

function showTecnologias() {
    imgTecnologia.src = "./img/todas.png"

}