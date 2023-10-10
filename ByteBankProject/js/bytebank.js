let saldoDaConta = 5000;

// Atualizando saldo na tela
const elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldoDaConta;


//Recuperando dados do formulario
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validando dados preenchidos do formulario
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
}
});




