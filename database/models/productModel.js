const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String
}, {
    timestamps: true
})

module.exports = mongonse.model('Product', productSchema);