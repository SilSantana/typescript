export abstract class View<T> {

    protected elemento: HTMLElement;    
     
    constructor(seletor: string) {
        const elementoTemp = document.querySelector(seletor);
        if (elementoTemp) {
            this.elemento = elementoTemp as HTMLElement;
        }else{
            throw Error(`Selector ${seletor} not found in DOM! Verify!`);
        } 
    }
    
    update(model: T): void { 
        let template = this.template(model);
        
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;

}