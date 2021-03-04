import React from 'react';
import propTypes from 'prop-types';
import * as styles from './styles.module.css';
import Post from '../Post';

const PostCointainer = ({ postsData }) => {
  const posts = postsData.map((data) => (
    <Post
      key={data.id}
      title={data.title}
      id={data.id}
      description={data.description}
      author={data.author}
    />
  ));

  return (
    <div className={styles.postContainer}>
      <div className={styles.postsWrapper}>
        {posts}
      </div>
    </div>
  );
};

PostCointainer.propTypes = {
  postsData: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    author: propTypes.string.isRequired,
  })).isRequired,
};

export default PostCointainer;
