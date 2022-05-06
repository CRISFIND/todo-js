
import {Todo} from '../classes';

import {todoList} from '../index';

//Referencias HTML
const divTodoList = document.querySelector('.todo-list'); //permite el acceso al html y devuelve el primer elemento del documento
const txtInput = document.querySelector('.new-todo');
const btnBorrar = document.querySelector('.clear-completed');
const ulFilfros = document.querySelector('.filters');

export const crearTodoHtml = (todo) => { //la funcion recibe un todo y envase a eso trabaja el html

    const  htmlTodo = `
    <li class=${(todo.completado)? 'completed' : '' } data-id="abc">
       <div class="view">
          <input class="toggle" type="checkbox" ${(todo.completado)? 'checked' : ''}>
          <label>${todo.tarea}</label>   
          <button class="destroy"></button>
       </div>
          <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div = document.createElement('div'); //crea una elemento que contiene la lista ordenada (li)
    div.innerHTML = htmlTodo;  //permite leer o asignarlo al contenido de un div  //div agrupa los contenidos

     divTodoList.append(div.firstElementChild); //append sirve para agregar el valor o lo que estas mandando 

     return div.firstElementChild;
}


//EVENTOS 

txtInput.addEventListener('keyup', (event) =>{  //addeventListener es como avisar al navegador que estar interactuando con el 

  if(event.keyCode === 13  && txtInput.value.length > 0){  //evento del enter numero 13 dependiendo del keyCode
       
const nuevoTodo = new Todo(txtInput.value);  // crea una tarea 
      todoList.nuevoTodo(nuevoTodo);

      crearTodoHtml(nuevoTodo);
      txtInput.value='';
  }

})

divTodoList.addEventListener('click' , (event) => {

const nombreELemento = event.target.localName; //input , label, button 
const todoElemento   = event.target.parentElement.parentElement;
const todoId         = todoElemento.getAttribute('data-id');



if(nombreELemento.includes('input')){      //click en el check 
    todoList.marcarCompletado(todoId);
    todoElemento.classList.toggle('completed');
} else if(nombreELemento.includes('button')){   //elimina la tarea 
    todoList.eliminarTodo(todoId);
    divTodoList.removeChild(todoElemento);
}
})


btnBorrar.addEventListener('click', () => {

    todoList.elminarCompletados();

    for(let i = divTodoList.children.length-1; i>= 0 ; i--){

        const elemento = divTodoList.children[i];

        if( elemento.classList.contains('completed') ){
            divTodoList.removeChild(elemento); //remueve las tareas completadas 
        }
    }
})

ulFilfros.addEventListener('click', (event) => {

const filtro = event.target.text;
if(!filtro){return ;} 

for( const elemento of divTodoList.children){

    elemento.classList.remove('hidden');

    const completado = elemento.classList.contains('completed');

     switch(filtro) {
        case 'Pendientes' :
            if(completado){
                elemento.classList.add('hidden');
            }
            break;

            case 'Completados' :
            if(!completado){
                elemento.classList.add('hidden');
            }
            break;

     }
}})