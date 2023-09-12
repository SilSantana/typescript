import { Printable } from "../uteis/printable.js";

export class Negociacao implements Printable {

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number) 
    {        
     }

    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }


    get volume() {
        return this.quantidade * this.valor;
    }


    public static criar(strData : string, strQuantidade : string, strValor : string) : Negociacao {
        const exp = /-/g;
        const date = new Date(strData.replace(exp,','));
        const quantidade = parseInt(strQuantidade);
        const valor = parseFloat(strValor);

        return new Negociacao(
            date,
            quantidade,
            valor
        );
    }

    public toString(): string {
        return `
        Data: ${this.data},
        Quantidade: ${this.quantidade},
        Valor: ${this.valor}   
        `;
    }

    public equals(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate() 
        && this.data.getMonth() === negociacao.data.getMonth()
        && this.data.getFullYear() === negociacao.data.getFullYear();
    }

}