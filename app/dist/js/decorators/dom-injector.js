export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`Modificando protype ${target.constructor.name} e adicionando getter para a propriedade ${propertyKey}`);
        let element;
        const getter = function () {
            if (!element) {
                element = document.querySelector(selector);
                console.log(`Buscando elemento do DOM com o selector ${selector} para injetar em ${propertyKey}`);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
//# sourceMappingURL=dom-injector.js.map