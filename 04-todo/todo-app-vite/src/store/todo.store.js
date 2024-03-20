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
        new Todo(`Piedra del espacio`),
        new Todo(`Piedra del todo`),
    ],
    filter : Filters.All
}

const initStore = () => {
    loadStore();
    console.log(state);
}

const loadStore = () =>{
    if(!localStorage.getItem('state')){// SI el local storage esta vacio
        return;
    }
     const {todos = [],filter = Filters.All} = JSON.parse(localStorage.getItem('state'))//Destructuracion de objetos y parsea el Json para volver el state a su estado original (Objeto) 
     state.todos = todos;//Le asigna el valor al state de notas 
     state.filter = filter;//Le asigna el valor al filtro de las notas 
}

const saveStateLocalStorage = () => {
    localStorage.setItem('state',JSON.stringify(state));//Agrega al localstorage de la aplicacion es el state de notas convertido en un json de string (Estos dos valores siempre tienen que ser string)
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
    saveStateLocalStorage();
}

const addTodo = (descripccion) => {
    if(!descripccion){
        throw new Error (`Se requiere que de una descripccion`);
    }
    state.todos.push(new Todo(descripccion));
    saveStateLocalStorage();
}

const toogleTodo = (todoId)=> {
    state.todos = state.todos.map(todo => {
        if(todo.id === todoId){
            todo.estado = ! todo.estado //Cambia el estado si es true pasa a false, si es false pasa a true 
        }
        return todo;
    })
    saveStateLocalStorage();
}

const deleteTodo = (todoId)=> {
    state.todos = state.todos.filter(todo => todo.id !== todoId);
    saveStateLocalStorage();
}


const deleteCompleted = ()=> {
    state.todos = state.todos.filter(todo => todo.done);
    saveStateLocalStorage();
}

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
    saveStateLocalStorage();
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