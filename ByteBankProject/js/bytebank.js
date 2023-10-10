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

    const inputTipoTransacao = elementoFormulario.querySelector("#tipoTransacao");
    const inputValor = elementoFormulario.querySelector("#valor");
    const inputData = elementoFormulario.querySelector("#data");

    let tipoTransacao =  inputTipoTransacao.value;
    let valor = inputValor.value;
    let data = inputData.value;
       
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
        data: data,
        isNova: true
    }
   
    elementoSaldo.textContent = saldoDaConta; 
    
    console.log(novaTransacao);
    elementoFormulario.reset();
});




