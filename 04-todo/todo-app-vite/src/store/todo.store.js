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

const getTodo = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.todos]; //Devuelve un nuevo arreglo con los valores que cumplen la condicion 
        case Filters.Completed:
            return state.todos.filter(todo => todo.estado);//Devuelve todos lo que el estado sea true 
        case Filters.Pending:
            return state.todos.filter(todo => !todo.estado);//Devuelve todos lo que el estado sea false !     
        default:
            throw new Error (`Opcion: ${filter} no permitida`);
    }
}

const addTodo = (descripccion) => {
    if(!descripccion){
        throw new Error (`Se requiere que de una descripccion`);
    }
    state.todos.push(new Todo(descripccion));
}

const toogleTodo = (todoId)=> {
    throw new Error ('No esta implementado');

}

const deleteTodo = (todoId)=> {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
}


const deleteCompleted = ()=> {
    state.todos = state.todos.filter(todo => todo.done);
}

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter
}


export default {
    initStore,
    loadStore,
    addTodo,
    toogleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,
    getTodo
}