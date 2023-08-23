export class View<T> {

    protected elemento: HTMLElement;
     
    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    update(model: T): void { 
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    template(model: T): string { 
        throw Error('Must be implemented in the inheritance!')
    }  

}