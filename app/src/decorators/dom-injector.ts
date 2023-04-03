export function domInjector(seletor: string) {

    return function (target: any, propertyKey: string) {
        console.log(`Modificando prototype ${target.constructor.name} e adicionando geter para a propiedade ${propertyKey}`);
        let elemento: HTMLElement;

        const getter = function () {
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`buscando elemento do DOM com o sletor ${seletor} para injetar em ${propertyKey}`);
            }

            return elemento;
        }

        Object.defineProperty(
            target,
            propertyKey,
            { get: getter })
    }
}