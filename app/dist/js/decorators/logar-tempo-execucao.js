export function logarTempoExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unidade = "milesegundos";
            if (emSegundos) {
                divisor = 1000;
                unidade = "segundos";
            }
            const temp1 = performance.now();
            const result = originalMethod.apply(this, args);
            const temp2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(temp2 - temp1) / divisor} ${unidade}`);
            result;
        };
        return descriptor;
    };
}
