
import { loadUsers } from "../casos-uso/carga-de-usuarios";
const state = {
    currentPage: 0,
    users: []
}

const loadNextPage = async () => {
    const users = await loadUsers (state.currentPage + 1)
    if(users.length ===0){
        return
    }
    state.currentPage +=1;
    state.users = users;

}

const loadPreviousPage = async () => {
    throw new Error('No implemetado');
}

const onUserChanged = () => {
    throw new Error('No implemetado');
}

const reloadPage = async() => {
    throw new Error('No implemetado');
}

export default {
    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,
    getUsers: () => [
        ...state.users
    ],
    getCurrentPage: () => state.currentPage
}