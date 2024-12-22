import { gql } from '@apollo/client';

// Fetch a single user by ID
export const QUERY_USER = gql`
  query user($userId: ID!) {
    user(userId: $userId) {
      _id
      username
    }
  }
`;

// Fetch all users
export const QUERY_USERS = gql`
  query users {
    users {
      _id
      username
    }
  }
`;

// Fetch the logged-in user's details
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
    }
  }
`;
