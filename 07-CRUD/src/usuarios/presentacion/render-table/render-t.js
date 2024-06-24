import usersStore from '../../store/users-store';
import './render-t.css';

let table;


const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders = document.createElement('thead');
    tableHeaders.innerHTML = `
      <tr>
        <th>ID</th>
        <th>BALANCE</th>
        <th>FIRSTNAME</th>
        <th>LASTNAME</th>
        <th>ACTIVE</th>
        <th>ACTIONS</th>
      </tr>

    `;
    const tableBody = document.createElement('tbody');
    table.append(tableHeaders,tableBody);
    return table;
}
/**
* 
* @param {HTMLDivElement} element 
*/

export const renderTable = (element) => {

    const users = usersStore.getUsers();

    if(!table){
        table = createTable();
        element.append(table);
        //TODO: listener a la tabla 
    }

    let tableHtml = '';
    users.forEach(user => {
        tableHtml += `
            <tr>
                <td>${user.id}</td>
                <td>${user.balance}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.isActive}</td>
                <td>
                    <a href='#/' data-id = '${user.id}'>Select<a>
                    <a href='#/' data-id = '${user.id}'>Delete<a>
                </td>
            </tr>
        `
    })

    table.querySelector('tbody').innerHTML = tableHtml;
}

