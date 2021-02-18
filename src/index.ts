
import { ApolloServer } from 'apollo-server';

import { messages, orgs, users } from './database';
import { gqlSchema } from './schema';


const resolvers = {
  Query: {
    users: () => users,
    orgs: () => orgs,

    user: (parent, args, context, info) => {
      return users.find(user => user.id === args.id);
    },
    org: (parent, args, context, info) => {
      return orgs.find(org => org.id === args.id);
    },
  },
  User: {
    org: (parent, args, context, info) => {
      return orgs.find(org => org.id === parent.orgId);
    },
    inbox: (parent, args, context, info) => {
      return messages.filter(message => message.toId === parent.id);
    }
  },
  Org: {
    users: (parent, args, context, info) => {
      return users.filter(user => user.orgId === parent.id);
    }
  },
  Message: {
    from: (parent, args, context, info) => {
      return users.filter(user => user.id === parent.fromId)[0];
    },
    to: (parent, args, context, info) => {
      return users.filter(user => user.id === parent.toId)[0];
    }
  }
};

const server = new ApolloServer({ typeDefs: gqlSchema, resolvers });

server.listen().then(() => {
  console.log('Server Ready!');
});