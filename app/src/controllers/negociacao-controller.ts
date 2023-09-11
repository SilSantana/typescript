import { inspect } from "../decorators/inspect.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";
import { DiasDaSemana } from "../enuns/DiasDaSemanaEnum.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";


export class Negociacaocontroller {

    private inputData : HTMLInputElement; 
    private inputQuantidade : HTMLInputElement; 
    private inputValor : HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    

    constructor() { 
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement; 
        this.inputValor = document.querySelector('#valor') as HTMLInputElement; 
        this.negociacoesView.update(this.negociacoes);
    }

    @logarTempoExecucao()
    @inspect()
    public adiciona() : void {
        const negociacao = Negociacao.criar(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );

        if (!this.ehDiaUtil(negociacao.data)) {            
            this.mensagemView.update("Apenas negociações realizadas em dias uteis são aceitas!");
            return ;
        }  
        
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limparFormulario();
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    private limparFormulario() : void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView() : void {
        /*  Um cometario esquecido*/
        this.negociacoesView.update(this.negociacoes); 
        this.mensagemView.update('Negociação adicionada com sucesso');
    }

}