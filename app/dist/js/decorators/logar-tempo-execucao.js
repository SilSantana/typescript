export function logarTempoExecucao() {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            const temp1 = performance.now();
            const result = originalMethod.apply(this, args);
            const temp2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(temp2 - temp1) / 1000} segundos`);
            result;
        };
        return descriptor;
    };
}
