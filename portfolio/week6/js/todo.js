import { getFromList, qs, saveFromList, saveToList } from './util.js';

var todo = [];

funciton savesTodo(key) {
    saveToList(key, todo);
}

class Todo {
    constructor(parentId, key) {
        this.listElement = qs(parentId);
        this.key = key;
        this.displayAllTodos(todo);
    }
}

addNewTodo(text, key) {
    const newTodo = {
        id: new Date(),
        text: text,
        completed: false
    }
    todo.push(newTodo);
    saveTodo(key);
}

getText() {
    return this.text;
}

displayTodos(key) {
    todos = getFromList(key);
    let list = qs('#todoList');
    list.innerHTML = "";
    for (let i = 0; i < todo.length; i++) {
        let element = todos[i];
        
        let text = document.createElement("p");
        text.textContent = element.text;
        text.class = "text";

}

DeleteBtn(element) {
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

}
