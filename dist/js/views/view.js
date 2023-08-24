export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const elementoTemp = document.querySelector(seletor);
        if (elementoTemp) {
            this.elemento = elementoTemp;
        }
        else {
            throw Error(`Selector ${seletor} not found in DOM! Verify!`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
