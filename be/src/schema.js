const typeDefs = `
  input PostInput {
    title: String
    description: String
    author: String
  }

  type Post {
    id: String
    title: String
    description: String
    author: String
  }

  type Query {
    ping: String!
    posts: [Post]
  }
  type Mutation {
    createPost(data: PostInput): String!
    updatePost(id: String!, data: PostInput): String!
    deletePost(id: String!): String!
  }
`;

export default typeDefs;
