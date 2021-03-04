import React from 'react';
import { useQuery } from '@apollo/client';
import * as styles from './styles.module.css';
import gql from '../../constants/graphql';
import PostContainer from '../../components/PostContainer';

const Landing = () => {
  const { data } = useQuery(gql.POSTS);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.pageHeading}>Post it!</div>
      <PostContainer postsData={data ? data.posts : []} />
    </div>
  );
};

export default Landing;
