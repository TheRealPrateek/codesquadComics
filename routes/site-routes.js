const express = require('express');
const router = express.Router();
const siteController = require('../controllers/site-controller');

router.route('/')
    .get(siteController.index);
router.route('/about')
    .get(siteController.about);
router.route('/login')
    .get(siteController.login)
    .post(siteController.loginPost);
router.route('/register')
    .get(siteController.register)
    .post(siteController.registerPost)
router.route('/auth/google')
    .get(siteController.googleGet)
router.route('/auth/google/NAME?')
    .get(siteController.googleRedirectGet)
router.route('/logout')
    .get(siteController.logout)

module.exports = router;