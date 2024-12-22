const typeDefs = `

type User {
  _id: ID!
  username: String!
}

type Auth {
  token: ID!
  user: User
}

type Query {
  user(userId: ID!): User
  users: [User]
  me: User
}

type Mutation {
  addUser(username: String!): Auth
  updateUser(username: String!): User
  login(username: String!): Auth
  removeUser: User
}

`;

module.exports = typeDefs;