import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoesdoDia() {
        return fetch('http://localhost:8080/dados')
            .then(resp => resp.json())
            .then((dados) => {
            return dados.map(item => {
                return new Negociacao(new Date(), item.vezes, item.montante);
            });
        });
    }
}
//# sourceMappingURL=negociacoes-service.js.map