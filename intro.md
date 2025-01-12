The current code mixes apollo-server and apollo-server-express, which can cause issues. We should use apollo-server-express

access the GraphQL playground
http://localhost:9001/graphql
run queries like

query {
  books {
    title
    author
  }
}