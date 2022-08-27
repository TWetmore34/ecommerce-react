const express = require('express');
const { ApolloServer } = require('apollo-server-express')
const db = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001

const { typeDefs, resolvers } = require('./schemas')
const server = new ApolloServer({
    typeDefs,
    resolvers
    // set up auth here later
})

app.get('/', (req, res)=> {
    res.end('hello')
})

const startApolloServer = async (typeDefs, resolvers) => {
    await server.start()
    server.applyMiddleware({ app })
    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`running on port ${PORT}`)
        })
    })

}

startApolloServer(typeDefs, resolvers)