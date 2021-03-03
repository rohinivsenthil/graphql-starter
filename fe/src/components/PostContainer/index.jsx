import React from 'react';
// import propTypes from 'prop-types';
import * as styles from './styles.module.css';
import Post from '../Post';

const PostCointainer = () => (
  <div className={styles.container}>
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
);

// Post.propTypes = {
//   title: propTypes.string,
//   id: propTypes.string,
//   description: propTypes.string,
//   author: propTypes.string,
// };

// Post.defaultProps = {
//   title: 'Post Title',
//   id: 'qwert-34567-fghj-789',
//   description: 'Lorem ipsum',
//   author: 'John Doe',
// };

export default PostCointainer;
