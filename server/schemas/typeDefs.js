const typeDefs = `

  type User {
    id: ID!
    username: String!
    email: String!
    age: Int
    gender: String
    bio: String
    likes: [User]
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
    addUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
    removeUser: User
    likeUser(userId: ID!): User
  }
`;

module.exports = typeDefs;