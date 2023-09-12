import { Printable } from "../uteis/printable.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes extends Printable {
    private negociacoes : Array<Negociacao> = [];

    public adiciona(negociacao : Negociacao){
        this.negociacoes.push(negociacao);
    }

    public lista() : ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

    public toString(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}