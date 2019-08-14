import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { postsQuery } from '../../../../schema/schema';
import { Upload } from '../AddGame/AddGame';
import { Files } from './Files';

export const Home = () => (
  //   const { data, loading } = useQuery(postsQuery);
  //   if (loading) {
  //     return <div>loading...</div>;
  //   }
  <div>
    {/* {data.posts.map((post, i) => (
        <h1 key={i}>{post.title}</h1>
      ))} */}
    <Upload />
    <Files />
  </div>
);
