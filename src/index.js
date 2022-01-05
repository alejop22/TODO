import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componenetes';


export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml( todo ));