/* o Local Storage é uma alternativa para poder salvar informações
no navegador do usuário enquanto não se sabe sobre Banco de Dados (BD) */

/* 
Armazenamento de variáveis simples 
//armazenar um nome
localStorage.setItem("nome", "Alice");
localStorage.setItem("fone", "(27)99711-2661)");

//obter um valor e uma variavel armazenada
const nome = localStorage.getItem("nome");
const fone = localStorage.getItem("fone");

document.write("<p>" + nome);
document.write("<p>" + fone);
*/

/* Armazenamento JSON
Formato JSON guarda OBJETOS JS */

//Objeto
const contato1 = {
  nome: "Alice",
  fone: "(27)99711-2661",
};

const contato2 = {
  nome: "Fabi",
  fone: "(27)9925-0150",
};

const bd_contatos = [contato1, contato2];

//JSON.stringify converte objetos em uma string
localStorage.setItem("bd_contatos", JSON.stringify(bd_contatos));

//JSON.parse transforma a string em um objeto
const contatos = JSON.parse(localStorage.getItem("bd_contatos"));

for (let c of contatos) {
  document.write("<p>" + c.nome);
  document.write("<p>" + c.fone);
}
