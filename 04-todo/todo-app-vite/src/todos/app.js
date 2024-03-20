import html from "../todos/app.html?raw";
import todoStore from '../store/todo.store';
import { renderTodos } from "../todos/use-cases/index";

//Nombres de los elementos HTML
const ElementIDs = {
    CleanerCompleted : '.clear-completed',
    TodoList : `.todo-list`,
    NewTodoImput : `#new-todo-input`
}

/**
 * 
 * @param {string} elementId Sirve para la renderizacion del programa 
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodo(todoStore.getCurrentFilter());
        renderTodos(ElementIDs.TodoList,todos)
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    


    //Refercias al DOM 
   const newDescriptionImput = document.querySelector(ElementIDs.NewTodoImput);
   const listaNotas = document.querySelector(ElementIDs.TodoList);
   const limpiarTodos = document.querySelector(ElementIDs.CleanerCompleted);



   newDescriptionImput.addEventListener('keyup', (evento) => { //Escucha cada ve que se oprime una tecla 
    if(evento.keyCode !== 13){//Verifica si el usuario ha presiona la tecla enter y se detiene si es asi
        return
    }
    if(evento.target.value.trim().length === 0){//Verifica que el usuario alla escrito algo 
        return;
    }
    todoStore.addTodo(evento.target.value);
    displayTodos();
    evento.target.value = ''

   })


   listaNotas.addEventListener('click', (evento) =>{
    const elemento = evento.target.closest('[data-id]'); //al darle click Busca el elemento mas cercano que tenga el atributo "data-id"
    todoStore.toogleTodo(elemento.getAttribute(`data-id`))//elemento.getAttribute accede al id de la nota y este se pasa al cambio de estado
    displayTodos();  
   })

   listaNotas.addEventListener('click', (evento) =>{       
        if(evento.target.className === 'destroy'){
            const elemento = evento.target.closest('[data-id]'); //al darle click Busca el elemento mas cercano que tenga el atributo "data-id"
            todoStore.deleteTodo(elemento.getAttribute(`data-id`))//elemento.getAttribute accede al id de la nota y este se pasa al cambio de estado
            displayTodos();
        }
        return;    
   })

   limpiarTodos.addEventListener('click',(evento)=>{
     
    if(evento.target.className === 'clear-completed'){
        todoStore.deleteCompleted();
        displayTodos();
    }
    return
    
   })

}