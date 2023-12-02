// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  const forms = document.querySelectorAll('.needs-validation')

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
          form.classList.add('was-validated')
      } else {
          inseirContato();
          form.classList.remove('was-validated')
          form.reset();
      }

      event.preventDefault()
      event.stopPropagation()

    }, false)
  })
})()

//função auxiliar para obter os dados no local storage
function getLocalStorage() {
  return JSON.parse(localStorage.getItem("bd_contatos")) ?? [];
  /*
  "?? []" significa que caso o array bd_contatos, retorna ela, senao, retorna array vazio
  JSON.parse() torna um objeto formato JSON e devolve um array
  */
}

function setLocalStorage(bd_contatos) {
          localStorage.setItem("bd_contatos", JSON.stringify(bd_contatos));
// essa função vai setar um item do local storage com o bd_contatos; caso ele exista, o bd_contatos vai atualizar, senao ele vai criar esse contato
}

function atualizarTabela() {
          limparTabela();
          const bd_contatos = getLocalStorage();
          /*
          essa const vai acessar a função auxilair citada que, por sua vez, vai procurar a existencia de uma variavel bd_contatos no Local Storage. Cado exista, ela sera convertida de JSON para array que sera armazenado em bd_contatos
          */
          bd_contatos.forEach(inserirTabela);
          //forEach é uma iteração para cada contato registrado na instrução
}

function inserirLinhaTabela(contato, index) {
          const novaLinha = document.createElement("tr");
          // todo esse conteudo descrito abaixo estará dentro da <tr>
          novaLinha.innerHTML = 
          <th scope="row">${index}</th>
          <td>${contato.nome}</td>
          <td>${contato.telefone}</td>
          <td>
          <button type="button" class="btn btn-danger" id="${index}" onclick="excluirContato(${index})">Excluir</button>
          </td>

          document.querySelector("#tableContato>tbody").appendChild(novaLinha);
          // a nova linha vai ser filha de <tbody> que por sua vez é filha da tag de id=tableContato
}

function limparTabela() {
          var elemento = document.querySelector("#tabelaContato>tbody");
          while(elemento.firstChild) {
                    elemento.removeChild(elemento.firstChild);
          }
}

function inserirContato() {
          const contato = {
                    nome: document.getElementById("txtNome").value,
                    telefone: document.getElementById("txtTelefone").value
          }
          
          const bd_contatos = getLocalStorage();
          //ele vai buscar o contato nessa função
          bd_contatos.push(contato);
          setLocalStorage(bd_contatos);
          atualizarTabela();
}

function excluirContato(index) {
          const bd_contatos = getLocalStorage();
          bd_contatos.splice(index, 1);
          setLocalStorage(bd_contatos);
          atualizarTabela();
}

atualizarTabela();