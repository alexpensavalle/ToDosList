const Todo = require('../data/todos');

let IDcounter = 1;

module.exports = {
    index,
    create,
    isDone,
    delete: deleteTodo
}

function index(req, res) {
    let todos = Todo.getAll();
    let done = isDone(req.body.done);
    let todoID = req.body.todoID;
    res.render('index', { todos, done, todoID });
}

function create(req, res) {
    req.body.done = 'Not Done';
    req.body.todoID = IDcounter;
    console.log(req.body.todoID);
    IDcounter++;
    Todo.addToDo(req.body); //form data is always in req.body
    console.log(req.body);
    res.redirect('/todos');
}

 function isDone(isDoneYet) {
     return (isDoneYet ? 'Not Done' : 'Done');
 }

 function deleteTodo(req, res) { 
    Todo.removeToDo(req.body.todoID);
    console.log("todoID",req.body.todoID);
    res.redirect('/todos');
  }