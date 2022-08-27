const { AuthenticationError } = require('apollo-server-express');
const { Category, Order, Product, User } = require('../models')

const resolvers = {
    Query: {
        products: async () => {
            const products = await Product.find({}).populate('Category')
            return products
        }
    }
}

module.exports = resolvers