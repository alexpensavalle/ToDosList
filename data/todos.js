const todos = [];

//let isDone = false;

module.exports = {
    getAll,
    addToDo,
    removeToDo
}

function getAll() {
    return todos;
}

function addToDo(todo) {
    todos.push(todo);
}

function removeToDo(todo) {
    console.log("TODO being passed in", todo)//empty: {}
    let index = todo.todoID;//undefined
    let i = todos.map(function(e) { return e.todoID; }).indexOf(index);
    console.log("Index: ", index);
    todos.splice(index, 1);
}

