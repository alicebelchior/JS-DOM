btn = document.getElementById("btnCalcular");
btn.addEventListener("click", calcular);

function calcular() {
    var altura = parseFloat(document.getElementById("txtAltura").value);
    var peso = parseFloat(document.getElementById("txtPeso").value);
    //o .value acesssa a propriedade do valor do elemento, nao o elemento em si
    var imc = peso / (altura * altura);

    var d = document.getElementById("divIMC");
    d.innerHTML = "O IMC é: " + imc.toFixed(2);
}

