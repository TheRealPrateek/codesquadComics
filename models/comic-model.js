const mongoose = require('mongoose');
const {Schema} = mongoose;

const comicSchema = new Schema ({
    title: {
        type: String,
        required: [true, "The title is required."],
        maxlength: [80, "The maximum length for the title is 80 characters."]
    },
    author: {
        type: String,
        required: [true, "The author's name is required."],
        maxlength: [30, "The maximum length for the author's name is 30 characters."]
    },
    publisher: {
        type: String,
        required: [true, "Please select a publisher from the list."]
    },
    genre: {
        type: String
    },
    pages: {
        type: Number
    },
    rating: {
        type: Number,
        required: [true, "Please rate this comic out of five stars."],
        min: [0, "Minimum star rating is 0."],
        max: [5, "Maximum star rating is 5."]
    },
    synopsis: {
        type: String
    },
    image: {
        type: String
    }
})

const Comic = mongoose.model('Comic', comicSchema);
module.exports = Comic;