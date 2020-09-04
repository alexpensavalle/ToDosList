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
    res.render('index', { todos, done });
}

function create(req, res) {
    req.body.done = 'Not Done';
    req.body.todoID = IDcounter;
    IDcounter++;
    Todo.addToDo(req.body); //form data is always in req.body
    console.log(req);
    res.redirect('/todos');
}

 function isDone(isDoneYet) {
     return (isDoneYet ? 'Not Done' : 'Done');
 }

 function deleteTodo(req, res) { 
    Todo.removeToDo(req.body.todoID);
    res.redirect('/todos');
  }