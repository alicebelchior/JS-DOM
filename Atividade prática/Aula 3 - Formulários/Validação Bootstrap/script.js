//script de validação tirado da documentação do bootstrap
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const txtSenha = document.getElementById("txtSenha");
const txtConfSenha = document.getElementById("txtConfSenha");
const feedbackConfSenha = document.getElementById("feedbackConfSenha");

txtSenha.addEventListener("input", validarSenha);
txtConfSenha.addEventListener("input", validarSenha);

function validarSenha() {
  if (txtSenha.value != txtConfSenha.value) {
          txtConfSenha.setCustomValidity("As senhas não estão iguais");
          feedbackConfSenha.innerText("As senhas não estão iguais");
} else {
          txtConfSenha.setCustomValidity("");
  }
}
