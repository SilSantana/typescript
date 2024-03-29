var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.negociacoesService = new NegociacoesService();
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criar(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView.update("Apenas negociações realizadas em dias uteis são aceitas!");
            return;
        }
        this.negociacoes.adiciona(negociacao);
        myPrint(negociacao, this.negociacoes);
        this.atualizaView();
        this.limparFormulario();
    }
    importarDados() {
        this.negociacoesService
            .obterNegociacoesdoDia()
            .then(negociacaoDeHoje => {
            return negociacaoDeHoje.filter(negociacaoDeHoje => {
                return !this.negociacoes
                    .lista()
                    .some(negociacao => negociacao.equals(negociacaoDeHoje));
            });
        })
            .then(todayNegociation => {
            for (let negociacao of todayNegociation) {
                this.negociacoes.adiciona(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });
    }
    ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
}
__decorate([
    domInjector('#data')
], Negociacaocontroller.prototype, "inputData", void 0);
__decorate([
    domInjector('#quantidade')
], Negociacaocontroller.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector('#valor')
], Negociacaocontroller.prototype, "inputValor", void 0);
__decorate([
    logarTempoExecucao(),
    inspect()
], Negociacaocontroller.prototype, "adiciona", null);
//# sourceMappingURL=negociacao-controller.js.map