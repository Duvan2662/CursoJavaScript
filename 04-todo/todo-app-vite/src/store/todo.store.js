import { Todo } from "../todos/models/todo.models";

const Filters = {
    All : 'all',
    Completed : 'completed',
    Pending : 'pending',

}

const state = {
    todos: [
        new Todo(`Piedra del alma`),
        new Todo(`Piedra del infinito`),
        new Todo(`Piedra del tiempo`),
    ],
    filter : Filters.All
}

const initStore = () => {
    console.log('InitStore');
    console.log(state);
}

const loadStore = () =>{
    throw new Error ('No esta implementado');
}

const addTodo = (descripccion) => {
    throw new Error ('No esta implementado');
}

const toogleTodo = (todoId)=> {
    throw new Error ('No esta implementado');

}

const deleteTodo = (todoId)=> {
    throw new Error ('No esta implementado');
}


const deleteCompleted = ()=> {
    throw new Error ('No esta implementado');
}

const setFilter = (newFilter = Filters.All) => {
    throw new Error ('No esta implementado');
}

const getCurrentFilter = () => {
    throw new Error ('No esta implementado');
}

export default {
    initStore,
    loadStore,
    addTodo,
    toogleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter
}