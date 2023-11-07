//document.write("Olá Mundo");
//document.write(Date());
//document.write(document.title);
//document.write(document.characterSet);

var corpo = document.body; //acesso direto, selecionando um certo elemento
corpo.style.background = "gray";
document.title = "Novo título";
//podem ser feitas outras modificações, acessando as propriedades "document" ou "corpo"

//getElementById
var h1_brasil = document.getElementById("pais_brasil");
h1_brasil.style.background = "Yellow";
document.write("<p> innerText: " + h1_brasil.innerText);
document.write("<p> innerHTML: " + h1_brasil.innerHTML);
//alert(h1_brasil.innerHTML)

//getElementsByTagName
var array_h2 = document.getElementsByTagName("h2");
//ele vai pegar todos os h2 que houver no html e colocar no array
var h2_es = array_h2[0];
var h2_mg = array_h2[1];
h2_es.style.color = "pink";
h2_mg.style.color = "darkred";

//getlementsByName
var array_cidade = document.getElementsByName("cidade");
//ele vai pegar todos os name="cidade" que houver no html e colocar no array
var cidade_0 = array_cidade[0]; //Alegre
cidade_0.style.borderLeftColor = "green";

//getlementsByClassName
var array_cidade_mg = document.getElementsByClassName("cidade-mg")
//ele vai pegar todos os class="cidade-mg" que houver no html e colocar no array
var cidade_mg_1 = array_cidade_mg[1]; //Lavras
cidade_mg_1.style.borderLeftColor = "yellow";

//querySelector
//esse seletor é usado para selecionar o primeiro elemento (seja id, seja class) html atraves de seletores css
var pais = document.querySelector("#pais_brasil") //# = id;
pais.style.border = "2px solid green";
pais.style.textAlign = "center";

var cidade_es_0 = document.querySelector(".cidade-es") //. = class
cidade_es_0.style.color = "blue";