import { renderTable } from "./presentacion/render-table/render-t";
import usersStore from "./store/users-store";



export const UsersApp = async(element) => {
    element.innerHtml = 'Cargando . . . . . ';
    await usersStore.loadNextPage();
    element.innerHtml = '';
    renderTable(element);
}