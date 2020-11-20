const mongoose = require('mongoose');

const schema = mongoose.Schema;

const sareeSchema = new schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    sareetype: {
        type: String,
        required: true
    },
    imagesUrl: {
        type: Array,
        required: true
    }
})

const Saree = mongoose.model('Saree', sareeSchema)

module.exports = Saree;