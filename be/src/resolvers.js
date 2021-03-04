import fs from 'fs';
import { v4 } from 'uuid';

const resolvers = {
  Query: {
    ping: () => 'Pong',
    getPosts: () => {
      return JSON.parse(fs.readFileSync('posts.json'));
    },
  },

  Mutation: {
    createPost: (_, args) => {
      const posts = [...JSON.parse(fs.readFileSync('posts.json')), {...args.data, id: v4()}];
      fs.writeFileSync('posts.json', JSON.stringify(posts, null, 4))
      return 'Post created successfully';
    },
    updatePost: (_, args) => {
      const posts = JSON.parse(fs.readFileSync('posts.json')).map(post =>
        post.id === args.id ? {...post, ...args.data} : post
      );
      fs.writeFileSync('posts.json', JSON.stringify(posts, null, 4))
      return 'Post updated successfully'
    },
    deletePost: (_, args) => {
      const posts = JSON.parse(fs.readFileSync('posts.json')).filter(post =>
        post.id !== args.id
      );
      fs.writeFileSync('posts.json', JSON.stringify(posts, null, 4))
      return 'Post deleted successfully'
    }
  }
};

export default resolvers;
