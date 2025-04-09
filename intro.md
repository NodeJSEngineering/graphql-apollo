The current code mixes apollo-server and apollo-server-express, which can cause issues. We should use apollo-server-express

Apollo Server: For setting up the GraphQL server.

GraphQL: Core library for working with GraphQL.
Sequelize (or TypeORM, Mongoose for MongoDB, etc.): For interacting with your database.

pg (or mysql2, mongodb, etc.): For connecting to the database.
npm install apollo-server express graphql axios sequelize pg pg-hstore mongoose

access the GraphQL playground
http://localhost:9001/graphql
run queries like

query ExampleQuery {
  books {
    title
    author
  }
}

query ExampleQuery {
  book(title:"The Great Gatsby") {
    title
    author
  }
}

mutation {
  addBook(title: "Brave New World", author: "Aldous Huxley") {
    title
    author
  }
}
