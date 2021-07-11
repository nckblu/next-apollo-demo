import { gql } from "@apollo/client";

export const PEOPLE_QUERY = gql`
  query ($limit: Int!, $offset: Int!) {
    superCoolGuys(limit: $limit, offset: $offset) {
      id
      email
      name
      favePhrase
      hotline
      companyName
      address
    }
  }
`;

export default PEOPLE_QUERY;
