const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true       //---Index----
    },
    price: Number,
    brand: String,

}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema);