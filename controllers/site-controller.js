const passport = require('passport');
const Comic = require('../models/comic-model');
const User = require('../models/user-model');

module.exports = {
    index: async function (request, response) {
        Comic.find({}).then(function(comicBooks) {
            response.render('pages/index', {
                comicBooks: comicBooks
            })
        }).catch(function(error) {
            console.log(error)
        })
    },
    about: (request, response) => {
        response.render('pages/about')
    },
    login: (request, response) => {
        response.render('pages/login')
    },
    loginPost: (request, response) => {
        const {username, password} = request.body;
        const user = new User({
          username: username,
          password: password
        });
        request.login(user, (error) => {
            if (error) {
                console.log(error)
                response.redirect('/login')
            } else {
                passport.authenticate('local')(request, response, () => {
                response.redirect('/admin-console')
                })
            }
        })
    },
    register: (request, response) => {
        response.render('pages/register')
    },
    registerPost: (request, response) => {
        User.register({username: request.body.username}, request.body.password, (error, user) => {
            if (error) {
                console.log(error);
            } else {
                passport.authenticate('local')(request, response, () => {
                    response.redirect('/admin-console')
                })
            }
        })
    },
    googleGet: passport.authenticate('google', {scope: ['openid', 'profile', 'email']}),
    googleRedirectGet: [
        passport.authenticate('google', {failureRedirect: '/login'}), function (request, response) {
            response.redirect('/admin-console')
        }
    ],
    logout: (request, response) => {
        request.logout(function(error){
            if (error) {
                console.log(error)
            }
            response.redirect('/')
        })
    }
}