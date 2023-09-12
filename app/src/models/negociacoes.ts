import { Comparable } from "../interfaces/Comparable.js";
import { Printable } from "../uteis/printable.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Printable, Comparable<Negociacoes> {
    
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

    public equals(objeto: Negociacoes): boolean {
       return JSON.stringify(this.negociacoes) === JSON.stringify(objeto.lista());
    }
}