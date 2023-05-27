const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/codesquadComics');

mongoose.connect(process.env.MDB_URL);