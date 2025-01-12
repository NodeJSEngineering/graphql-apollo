const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cors = require('cors');
const bodyParser = require('body-parser');
// A schema is a collection of type definitions (hence "typeDefs") that together define the "shape" of queries that are executed against your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields: 'title' and 'author'.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

const books = [
    {
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
    },
    {
      title: 'Wuthering Heights',
      author: 'Emily Brontë',
    },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

// Create an Apollo Server instance
  // The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });

// Create an Express application
const app = express();
const port = process.env.PORT || 9001;

app.use(cors());
app.use(bodyParser.json());

// Define a simple route to handle the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the GraphQL API');
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  app.listen(port, () => {
    console.info(`Server started on port ${port}`);
  });
}

startServer();
