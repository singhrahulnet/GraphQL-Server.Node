const fetch = require('node-fetch');

const resolvers = {
    Query: {
        getPost: async (_, { id }) => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/`);
            return res.json();
        },
        posts: async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
            return res.json();
        }
    },
    Post: {
        user: async parent => {
            const userId = parent.userId
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            return res.json();
        }
    }
}

module.exports.Resolvers = resolvers;