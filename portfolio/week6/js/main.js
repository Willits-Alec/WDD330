import { qs } from './util.js';

  const listTodo = new Todo("#todoList", "todos");
  

  let Button = qs('#addButton');
  Button.addEventListener('click', addButton);
qs('body').addEventListener("onload", listTodo.displayAllTodos(listTodo.key));

    function saveBtn() {
        const inputelement = qs('#doit').value;

        listTodo.addNewTodo(inputelement, listTodo.key);
        listTodo.displayAllTodos(listTodo.key);
        qs('#doit').value = "";
    }

    import Todo from "./todo.js";