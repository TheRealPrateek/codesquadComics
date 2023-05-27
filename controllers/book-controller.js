const Comic = require('../models/comic-model');

module.exports = {
    book_detail: (request, response) => {
        let bookId = request.params.id;
        Comic.findById(bookId).then(function(bookDetail) {
            response.render('pages/book', {
                bookDetail: bookDetail
            })
        }).catch(function(error) {
            console.log(error);
        })
    },
    createBookPost: (request, response) => {
        const {title, author, publisher, genre, pages, rating, synopsis, image} = request.body;
        const newComic = new Comic ({
            title: title, 
            author: author, 
            publisher: publisher, 
            genre: genre, 
            pages: pages, 
            rating: rating, 
            synopsis: synopsis, 
            image: image
        });
        newComic.save();
        response.redirect('/admin-console');
    },
    updateBookPut: (request, response) => {
        let bookId = request.params.id;
        const {title, author, publisher, genre, pages, rating, synopsis, image} = request.body;
        Comic.findByIdAndUpdate(bookId, { $set: { 
            title: title, 
            author: author, 
            publisher: publisher, 
            genre: genre, 
            pages: pages, 
            rating: rating, 
            synopsis: synopsis, 
            image: image
        }}).catch(function(error) {
            console.log(error);
        })
        response.redirect('/admin-console');
    },
    deleteComic: (request, response) => {
        let bookId = request.params.id;
        Comic.findByIdAndDelete(bookId).catch(function(error){
            console.log(error)
        });
        response.redirect('/admin-console');
    }
}