import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";
import { DiasDaSemana } from "../enuns/DiasDaSemanaEnum.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesService } from "../services/negociacoes-service.js";
import { myPrint } from "../uteis/myPrint.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";


export class Negociacaocontroller {

    @domInjector('#data')
    private inputData : HTMLInputElement; 
    @domInjector('#quantidade')
    private inputQuantidade : HTMLInputElement; 
    @domInjector('#valor')
    private inputValor : HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negociacoesService = new NegociacoesService();

    constructor() {  
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
        myPrint(negociacao, this.negociacoes);
        this.atualizaView();
        this.limparFormulario();
    }

    public importarDados(): void {
        this.negociacoesService
        .obterNegociacoesdoDia() 
        .then(negociacaoDeHoje => {
            return negociacaoDeHoje.filter(negociacaoDeHoje => {
                return !this.negociacoes
                .lista()
                .some(negociacao => negociacao.equals(negociacaoDeHoje))
            });
        })     
        .then(todayNegociation => {
            for(let negociacao of todayNegociation) {
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });
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