const images = [
    //{ src: "https://images.unsplash.com/photo-1524520400288-f6b421bfe0d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" },
    //{ src: "https://images.unsplash.com/photo-1599137937219-3abca552b65f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80" }
];

module.exports = {
    getAll,
    addImage
}

function getAll() {
    return images;
}

function addImage(image) {
    images.push(image);
}