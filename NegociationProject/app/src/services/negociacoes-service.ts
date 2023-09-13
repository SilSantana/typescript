import { NegociacoesDoDia } from "../interfaces/negociacao-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {

    public obterNegociacoesdoDia(): Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
        .then( resp => resp.json())
        .then((dados: NegociacoesDoDia[]) => {
           return dados.map( item => {
                return new Negociacao(
                    new Date(), 
                    item.vezes, 
                    item.montante)
            })
        });
    }
}