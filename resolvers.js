const axios = require('axios');

const Query = {
    test: () => 'Test Success, GraphQL server is up & running !!',
     // Fetch all users from the REST API

     users: async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/users',
        //     {
        //         headers: {
        //           Authorization: `Bearer YOUR_TOKEN`
        //         }
              
        // }
    );
          return response.data;
        } catch (error) {
          throw new Error('Failed to fetch users');
        }
      },  
      // Fetch a specific user by ID from the REST API
      user: async (_, { id }) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        return response.data;
      },
      posts: async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
      },
  
      post: async (_, { id }) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response.data;
      },
 }


 module.exports = {Query}