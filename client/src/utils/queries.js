import { gql } from '@apollo/client';

// Fetch a single user by ID
export const QUERY_USER = gql`
  query getUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      email
    }
  }
`;

// Fetch all users
export const QUERY_USERS = gql`
  {
    users {
      _id
      username
      email
    }
  }
`;

// Fetch the logged-in user's details
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;