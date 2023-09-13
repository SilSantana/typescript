import { Printable } from "./printable.js";

export function myPrint(...itens: Array<Printable>){

    for (let item of itens) {
        console.log(item.toString());
    }
}