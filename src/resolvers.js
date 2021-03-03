const posts = [
  {
    id: '1',
    title: 'title 1',
    description: 'desc 1',
    author: 'author 1'
  },
  {
    id: '2',
    title: 'title 2',
    description: 'desc 2',
    author: 'author 2'
  }
]


const resolvers = {
  Query: {
    ping: () => 'Pong',
    getPosts: () => {
      return posts
    },
  },

  Mutation: {
    createPost: (_, args) => {
      console.log(args);
      return 'Post created successfully'
    },
    updatePost: (_, args) => {
      console.log(args);
      return 'Post updated successfully'
    },
    deletePost: (_, args) => {
      console.log(args);
      return 'Post deleted successfully'
    }
  }
};

export default resolvers;
