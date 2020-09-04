const Image = require('../data/images');

module.exports = {
    index,
    create
}

function index(req, res) {
    const images = Image.getAll();
    res.render('index', { images });
}

function create(req, res) {
    Image.addImage(req.body); //form data is always in req.body
    res.redirect('/images');
}