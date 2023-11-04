//mostrar a quantidade e quais os elementos do doc HTML
//criei a array "elementos" e peguei todos os elementos com tag, sem especificar nenhuma tag (*)
var elementos = document.getElementsByTagName("*");
document.write("Quantidade de elementos: "+ elementos.length);

var todosElementos = "";

//para i dentro de elementos
for (let i of elementos){
    todosElementos = todosElementos + "<br>" + i.tagName;
}

document.write(todosElementos);