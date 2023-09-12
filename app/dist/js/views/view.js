export class View {
    constructor(seletor) {
        const elementoTemp = document.querySelector(seletor);
        if (elementoTemp) {
            this.elemento = elementoTemp;
        }
        else {
            throw Error(`Selector ${seletor} not found in DOM! Verify!`);
        }
    }
    update(model) {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map