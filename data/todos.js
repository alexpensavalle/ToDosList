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

function removeToDo(todoID) {
    let index = todos.indexOf(todoID);
    console.log("Index: ", index);
    todos.splice(index, 1);
}

