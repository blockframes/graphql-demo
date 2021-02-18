
import { gql } from 'apollo-server';

export const gqlSchema = gql`

type User {
  id: String
  name: String
  org: Org
  inbox: [Message]
}

type Org {
  id: String
  name: String
  users: [User]
}

type Message {
  id: String
  from: User
  to: User
  text: String
}

type Query {
  users: [User]
  orgs: [Org]

  user(id: String!): User
  org(id: String!): Org
}

`;