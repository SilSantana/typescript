var saldoDaConta = 5000;
// Atualizando saldo na tela
var elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldoDaConta.toString();
}
//Recuperando dados do formulario
var elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    // Validando dados preenchidos do formulario
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }
    var inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    var inputValor = elementoFormulario.querySelector("#valor");
    var inputData = elementoFormulario.querySelector("#data");
    var tipoTransacao = inputTipoTransacao.value;
    var valor = inputValor.valueAsNumber;
    var data = new Date(inputData.value);
    //Atualizando saldo da conta
    if (tipoTransacao == "Depósito") {
        saldoDaConta += valor;
    }
    else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldoDaConta -= valor;
    }
    else {
        alert("Tipo de Transação é inválido!");
        return;
    }
    var novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    };
    elementoSaldo.textContent = saldoDaConta.toString();
    console.log(novaTransacao);
    elementoFormulario.reset();
});
