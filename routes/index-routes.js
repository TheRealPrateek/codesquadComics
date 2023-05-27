const express = require('express');
const router = express.Router();

const adminRoutes = require('./admin-routes');
const bookRoutes = require('./book-routes');
const siteRoutes = require('./site-routes');

router.use('/', siteRoutes);
router.use('/books', bookRoutes);
router.use('/admin-console', adminRoutes);

module.exports = router;