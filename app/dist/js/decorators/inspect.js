export function inspect(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`**** Método: ${propertyKey}`);
        console.log(`**** Parâmetros: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`**** Retorno: ${JSON.stringify(result)}`);
        return result;
    };
    return descriptor;
}
