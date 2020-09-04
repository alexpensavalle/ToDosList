const Todo = require('../data/todos');

module.exports = {
    index,
    create
}

function index(req, res) {
    const todos = Todos.getAll();
    res.render('index', { todos });
}

function create(req, res) {
    Todo.addTodo(req.body); //form data is always in req.body
    res.redirect('/todos');
}