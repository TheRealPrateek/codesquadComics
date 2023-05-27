const { request, response } = require('express');
const Comic = require('../models/comic-model');
const {v4:uuid} = require('uuid');

module.exports = {
    admin: async function (request, response) {
        if (request.isAuthenticated()) {
            Comic.find({}).then(function(comicBooks) {
                response.render('pages/admin', {
                    comicBooks: comicBooks
                })
            }).catch(function(error) {
                console.log(error)
            })
        }
    },
    createBook: (request, response) => {
        if (request.isAuthenticated()) {
            response.render('pages/create', {
            })
        }
    },
    updateBook: (request, response) => {
        if (request.isAuthenticated()) {
            let bookId = request.params.id;
            Comic.findByIdAndUpdate(bookId).then(function(foundBook) {
                response.render('pages/update', {
                    foundBook: foundBook
                });
            }).catch(function(error){
                console.log(error)
            })
        }
    }
}
