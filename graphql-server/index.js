const { GraphQLServer } = require('graphql-yoga');
const res = require('./resolvers');


const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers: res.Resolvers
})

server.start();