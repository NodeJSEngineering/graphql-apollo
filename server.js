const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const db = require('./db');

const port = process.env.PORT || 9001;
const app = express();

const fs = require('fs')

const typeDefs = fs.readFileSync('./schema.graphql',{encoding:'utf-8'})
const resolvers = require('./resolvers')
const userresolvers = require('./user_resolvers')
const { ApolloServer, gql } = require('apollo-server-express');
// const sequelize = require('./sequelizeInstance');
const User = require('./models/User');

app.use(cors()) 
app.use(bodyParser.json());

const server = new ApolloServer({ typeDefs, resolvers });
// const server = new ApolloServer({ typeDefs, userresolvers });


async function startServer() {
   await server.start();
   server.applyMiddleware({ app });
 
   app.listen(port, () => {
     console.info(`Server started on port ${port}`);
    //  sequelize.sync().then(() => {
    //   console.log('Database synced');
    // });
   });
 }
 
 startServer();

//  query ExampleQuery {
//   test 
// }

// query {
//   users {
//     id
//     name
//     email
//   }
// }

// query {
//   user(id: 1) {
//     id
//     name
//     email
//   }
// }

// new one resolver
// query {
//   users {
//     id
//     name
//     email
//   }
// }

// mutation {
//   createUser(name: "John Doe", email: "john.doe@example.com") {
//     id
//     name
//     email
//   }
// }

// const {makeExecutableSchema} = require('graphql-tools')
// const schema = makeExecutableSchema({typeDefs, resolvers})
// const  {graphiqlExpress,graphqlExpress} = require('apollo-server-express')
// app.use('/graphql',graphqlExpress({schema}))
// app.use('/graphiql',graphiqlExpress({endpointURL:'/graphql'}))
// https://www.tutorialspoint.com/graphql/graphql_environment_setup.htm




