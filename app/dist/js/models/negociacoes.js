import { Printable } from "../uteis/printable.js";
export class Negociacoes extends Printable {
    constructor() {
        super(...arguments);
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    toString() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}
