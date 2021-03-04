const fs = require('fs');
const { v4 } = require('uuid');

module.exports = {
  Query: {
    ping: () => 'Pong',

    posts: () => JSON.parse(fs.readFileSync('posts.json')),
  },

  Mutation: {
    createPost: (_, args) => {
      const posts = [...JSON.parse(fs.readFileSync('posts.json')), { ...args.data, id: v4() }];
      fs.writeFileSync('posts.json', JSON.stringify(posts, null, 4));
      return 'Post created successfully';
    },

    updatePost: (_, args) => {
      const posts = JSON.parse(fs.readFileSync('posts.json')).map((post) => (post.id === args.id ? { ...post, ...args.data } : post));
      fs.writeFileSync('posts.json', JSON.stringify(posts, null, 4));
      return 'Post updated successfully';
    },

    deletePost: (_, args) => {
      const posts = JSON.parse(fs.readFileSync('posts.json')).filter((post) => post.id !== args.id);
      fs.writeFileSync('posts.json', JSON.stringify(posts, null, 4));
      return 'Post deleted successfully';
    },
  },
};
