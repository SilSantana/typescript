import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";

export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar = false;
     
    constructor(seletor: string, escapar?: boolean) {
        const elementoTemp = document.querySelector(seletor);
        if (elementoTemp) {
            this.elemento = elementoTemp as HTMLElement;
        }else{
            throw Error(`Selector ${seletor} not found in DOM! Verify!`);
        }
        
        if (escapar){
            this.escapar = escapar;
        }
    }

    @logarTempoExecucao(true)
    update(model: T): void { 
        let template = this.template(model);
        if (this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;

}