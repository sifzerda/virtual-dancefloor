import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query getUser($userId: ID!) {
    user(userId: $userId) {
      id
      username
      email
    }
  }
`;

export const QUERY_USERS = gql`
  {
    users {
      id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      id
      username
      email
    }
  }
`;


