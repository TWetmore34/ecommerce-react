const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: String,
    img: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0
    },
    // add category setups
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }
})

const Product = mongoose.model('product', productSchema)

module.exports = Product
