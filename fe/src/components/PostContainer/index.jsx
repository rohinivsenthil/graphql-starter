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
    <div className={styles.container}>
      {posts}
    </div>
  );
};

PostCointainer.propTypes = {
  postsData: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string,
    title: propTypes.string,
    description: propTypes.string,
    author: propTypes.string,
  })),
};

PostCointainer.defaultProps = {
  postsData: [{
    id: '34567-ertyui-567-xcvbnm',
    title: 'Post Title',
    description: 'Lorem ipsum',
    author: 'John Doe',
  }],
};

export default PostCointainer;
