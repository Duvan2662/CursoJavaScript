import html from "../todos/app.html?raw";
/**
 * 
 * @param {string} elementId Sirve para la renderizacion del programa 
 */
export const App = (elementId) => {

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
    })();

}