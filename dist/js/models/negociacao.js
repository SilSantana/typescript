export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criar(strData, strQuantidade, strValor) {
        const exp = /-/g;
        const date = new Date(strData.replace(exp, ','));
        const quantidade = parseInt(strQuantidade);
        const valor = parseFloat(strValor);
        return new Negociacao(date, quantidade, valor);
    }
}
