import { Negociacaocontroller } from "./controllers/negociacao-controller.js";
const controller = new Negociacaocontroller();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error("It can not possible to load the app! Sorry!");
}
