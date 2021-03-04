import React from 'react';
import propTypes from 'prop-types';
import * as styles from './styles.module.css';

const Post = ({
  title, id, description, author,
}) => (
  <div className={styles.postWrapper}>
    <div className={styles.title}>{title}</div>
    <div className={styles.id}>{id}</div>
    <div className={styles.description}>{description}</div>
    <div className={styles.author}>{author}</div>
  </div>
);

Post.propTypes = {
  title: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
};

export default Post;
