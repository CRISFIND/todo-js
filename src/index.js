
import './styles.css';

import {TodoList,Todo} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();  // no olvidar importar 

todoList.todos.forEach(crearTodoHtml); 

//
