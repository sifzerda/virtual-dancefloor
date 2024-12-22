import { gql } from '@apollo/client';

// User Authentication Mutations

// Log in a user
export const LOGIN = gql`
  mutation login($username: String!) {
    login(username: $username) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Register a new user
export const ADD_USER = gql`
  mutation addUser($username: String!) {
    addUser(username: $username) {
      token
      user {
        _id
        username
      }
    }
  }
`;

// Remove the currently logged-in user
export const REMOVE_USER = gql`
  mutation removeUser {
    removeUser {
      _id
      username
    }
  }
`;

// Other Mutations