let saldoDaConta = 5000;

// Atualizando saldo na tela
const elementoSaldo = document.querySelector(".saldo-valor .valor") as HTMLElement;
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldoDaConta.toString();
}


//Recuperando dados do formulario
const elementoFormulario = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Validando dados preenchidos do formulario
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao") as HTMLSelectElement;
    const inputValor = elementoFormulario.querySelector("#valor") as HTMLInputElement;
    const inputData = elementoFormulario.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: string = inputTipoTransacao.value;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value);
       
    //Atualizando saldo da conta
    if (tipoTransacao == "Depósito") {
        saldoDaConta += valor;
    }else if (tipoTransacao == "Transferência" || tipoTransacao == "Pagamento de Boleto") {
        saldoDaConta -= valor;
    }else {
        alert("Tipo de Transação é inválido!");
        return;
    }

    const novaTransacao = {
        tipoTransacao: tipoTransacao,
        valor: valor,
        data: data
    }
   
    elementoSaldo.textContent = saldoDaConta.toString();
     
    console.log(novaTransacao);
    elementoFormulario.reset();
});




