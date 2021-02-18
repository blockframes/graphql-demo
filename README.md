
# GraphQL Demo

> This repo is a small working example of a GraphQL endpoint.

## Getting Started
1) clone the repo and install the dependencies.
    ```
    $> git clone https://github.com/
    $> cd graphql-demo
    $> npm i
    ```

2) start the server
    ```
    $> npm start
    ```
3) open the [GraphQl Playground](http://localhost:4000) in your browser

4) start typing queries

    _For example_:
    ```GraphQL
    query {
      user(id: "001") {
        name
      }
    }
    ```