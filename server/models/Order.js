const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    // products schema
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'product'
        }
    ]
})

const Order = mongoose.model('order', orderSchema)

module.exports = Order