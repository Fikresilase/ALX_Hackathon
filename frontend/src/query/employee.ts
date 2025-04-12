import { gql } from '@apollo/client';

export const GET_EMPLOYEES = gql`
  query GetEmployee {
    users {
      id
      name
      email
    }
  }
`;
