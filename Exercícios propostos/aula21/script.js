a1 = document.getElementById("area1");
a1.addEventListener("mousedown", mDown);
//o evento "mousedown" vai chamar uma função mDown
//o evento "mouseup" vai chamar uma função mUp
a1.addEventListener("mouseup", mUp);

//implementação das funções
function mDown() {
    obj = document.getElementById("area1");
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Solte-me!";
    /*
    essa função vai pegar o objeto (obj) pela id e mudar tanto a cor do Background quanto a frase dento do html
     */
}

function mUp() {
    obj = document.getElementById("area1");
    obj.style.backgroundColor = "#f04028";
    obj.innerHTML = "Obrigado!";
    /*
    essa função vai pegar o objeto (obj) pela id e mudar tanto a cor do Background quanto a frase dento do html
     */
}

a2 = document.getElementById("area2");
a2.addEventListener("mouseover", mOver);
a2.addEventListener("mouseout", mOut);

function mOver() {
    obj = document.getElementById("area2");
    obj.innerHTML = "Obrigado!"
}

function mOut() {
    obj = document.getElementById("area2");
    obj.innerHTML = "Passe o mouse!"
}