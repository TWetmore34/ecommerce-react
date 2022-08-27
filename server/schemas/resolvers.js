const { AuthenticationError } = require('apollo-server-express');
const { Category, Order, Product, User } = require('../models');
const { authMiddleware, signToken } = require('../utils/auth')

const resolvers = {
    Query: {
        products: async () => {
            const products = await Product.find({}).populate('category')
            return products
        },
        product: async (parent, { _id }) => {
            const product = await Product.findById(_id).populate('category')
            if(!product) throw new Error('No user with that name found!');
            return product
        },
        user: async (parent, args, context) => {
            if(context.user){
                const user = await User.findById(context.user._id)

                if(!user){
                    return new AuthenticationError('user not found!')
                }
                return user
            }
        },

        categories: async () => {
            const categories = await Category.find({})

            if(!categories) throw new Error('No category with that name found!'); 

            return categories
        },

        order: async (parent, { id }, context) => {
            const order = await Order.findById(id)

            if(!order) throw new Error('No order with that id found!'); 

            return order
        },

        checkout: async () => {
            // set up for stripe later
            return null
        }
    },
    Mutation: {
        createUser: async (parent, { firstname, lastname, email, password }) => {
            const newUser = {
                firstname,
                lastname,
                email,
                password
            }
            const created = await User.create(newUser, { new: true })
            const token = await signToken(firstname, email, newUser._id)
            return { created, token }
        },
        addOrder: async (parent, { products }) => {
            const newOrder = await (await Order.create({ products }))

            return newOrder.populate('products')
        },
        updateUser: async (parent, { firstname, lastname, email, password }, context) => {
            const updatedUser = await User.findOneAndUpdate(
                { _id: context.user._id },
                { firstname, lastname, email, password },
                { new: true })
            
                return updatedUser
        },
        updateProduct: async (parent, { _id, quantity }) => {
            const updatedProduct = await Product.findOneAndUpdate(
                { _id },
                { quantity },
                { new: true, runValidators: true, })

            return updatedProduct
        },
        login: async (parent, { email, _id, password }) => {
            // set up auth file first
            const user = await User.findById(_id)

            if(!user) return new AuthenticationError('User not found')

            const correctPw = user.isCorrectPassword(password)

            if(!correctPw) return new AuthenticationError('Incorrect username or password')



            const token = signToken(email, user.firstname, _id)

            return { user, token }

        }
    }
}

module.exports = resolvers