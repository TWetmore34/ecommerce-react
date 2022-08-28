const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        firstname: String!
        lastname: String!
        email: String!
        password: String!
        orders: [Order]
    }

    type Category {
        _id: ID
        name: String!
    }

    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
    } 

    type Product {
        _id: ID
        name: String!
        description: String
        img: String
        price: Float
        quantity: Int
        category: Category
    }

    type Checkout {
        session: ID
    }

    type Auth {
        token: ID
        user: User
    }

    type Query {
        products: [Product]
        product(_id: ID!): Product
        user: User
        categories: [Category]
        order(_id: ID!): Order
        checkout(products: [ID]!): Checkout
    }

    type Mutation {
        # creates user
        createUser(firstname: String!, lastname: String!, email: String!, password: String!): Auth

        # add order
        addOrder(products: [ID]!): Order

        # updateUser
        updateUser(firstname: String!, lastname: String!, email: String!, password: String!): User

        #updateProduct
        updateProduct(_id: ID!, quantity: Int!): Product

        #login
        login(email: String!, password: String!, _id: ID): Auth
    }
`

module.exports = typeDefs