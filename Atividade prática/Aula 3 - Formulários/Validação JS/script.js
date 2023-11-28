const txtSenha = document.getElementById("txtSenha");
const txtConfSenha = document.getElementById("txtConfSenha");

txtSenha.addEventListener("input", validarSenha);
txtConfSenha.addEventListener("input", validarSenha);

function validarSenha() {
          if (txtSenha.value == txtConfSenha.value) {
                    txtConfSenha.setCustomValidity("")
          } else {
                    txtConfSenha.setCustomValidity("As senhas não estão iguais")
          }
}