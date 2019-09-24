/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { postQuery } from '../../../../schema/schema';

export const Post = ({ match }) => {
  const { params } = match;
  const { data, loading } = useQuery(postQuery, {
    variables: { id: params.id },
  });
  console.log('data', data);
  const { post } = data;
  if (loading) {
    // if loading do animination
    return <div>loading...</div>;
  }

  return (
    <div className="App">
      <div className="Home">
        <div className="post-info">
          <h1>
            <Link to="/">My-Movie-Blog</Link>
          </h1>
          <h1>{post.title.toUpperCase()}</h1>
          <h2>Title: {post.title}</h2>
          <h2>Genre: {post.genre}</h2>
          <h2>Rating: {post.rating}</h2>
          <h2>Diffculty: {post.diffculty}</h2>
        </div>
      </div>
    </div>
  );
};
