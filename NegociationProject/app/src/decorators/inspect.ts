export function inspect() {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;
        descriptor.value = function(...args: Array<any>){
            console.log(`**** Método: ${propertyKey}`);
            console.log(`**** Parâmetros: ${JSON.stringify(args)}`);
            const result = originalMethod.apply(this, args);
            console.log(`**** Retorno: ${JSON.stringify(result)}`);          
            return result;
        }
        return descriptor;
    }
}