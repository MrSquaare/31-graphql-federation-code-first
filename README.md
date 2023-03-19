# GraphQL Federation - Code First

A tweaked example of GraphQL Federation using Code First approach. [(original example)](https://github.com/nestjs/nest/tree/master/sample/31-graphql-federation-code-first)

## Execution

First, build types and entities:

```sh
npm -w types run build
```

Make sure to start the two sub-graph applications first, then the gateway. Otherwise the gateway won't be able to fetch schemas from the sub-graphs.

```sh
npm -w users-application run start
```

```sh
npm -w posts-application run start
```

```sh
npm -w somethings-application run start
```

```sh
npm -w gateway run start
```

## Access the graph

You can reach the gateway under `http://localhost:3002/graphql`

## Query a combined graph

```gql
query getUserWithPosts($userId: ID!) {
  getUser(id: $userId) {
    id
    name
    posts {
      authorId
      id
      title
    }
  }
}
```
