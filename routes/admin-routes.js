const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller');

router.route('/')
    .get(adminController.admin)
router.route('/create-book')
    .get(adminController.createBook)
router.route('/update-book/:id')
    .get(adminController.updateBook)

module.exports = router;