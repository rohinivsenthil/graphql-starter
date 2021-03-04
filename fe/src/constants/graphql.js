import { gql } from '@apollo/client';

const POSTS = gql`
query Posts {
  posts {
    id
    title
    description
    author
  }
}
`;

export default { POSTS };
