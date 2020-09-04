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
    console.log("Before CREATE! REQ BODY: ",req.body)
    req.body.done = 'Not Done';
    req.body.todoID = IDcounter;
    IDcounter++;
    Todo.addToDo(req.body); //form data is always in req.body
    console.log("After CREATE! REQ BODY: ",req.body)
    res.redirect('/todos');
}

 function isDone(isDoneYet) {
     return (isDoneYet ? 'Not Done' : 'Done');
 }

 function deleteTodo(req, res) { 
    console.log("REQ BODY: ",req.body)
    Todo.removeToDo(req.body);
    res.redirect('/todos');
  }