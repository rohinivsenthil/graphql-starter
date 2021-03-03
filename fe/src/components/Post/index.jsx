import React from 'react';
import propTypes from 'prop-types';
import * as styles from './styles.module.css';

const Post = ({
  title, id, description, author,
}) => (
  <div className={styles.container}>
    <div className={styles.title}>{title}</div>
    <div className={styles.id}>{id}</div>
    <div className={styles.description}>{description}</div>
    <div className={styles.author}>{author}</div>
  </div>
);

Post.propTypes = {
  title: propTypes.string,
  id: propTypes.string,
  description: propTypes.string,
  author: propTypes.string,
};

Post.defaultProps = {
  title: 'Post Title',
  id: 'qwert-34567-fghj-789',
  description: 'Lorem ipsum',
  author: 'John Doe',
};

export default Post;
