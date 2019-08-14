import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import React from 'react';

export const filesQuery = gql`
  {
    posts {
      title
      profile_image
    }
  }
`;

export const Files = () => {
  const { data, loading } = useQuery(filesQuery);
  console.log();
  // if loading return
  if (loading) {
    return <div>loading...</div>;
  }
  // else
  return (
    <div>
      {data.posts.map((x, i) => (
        <div key={i}>
          <h1>{x.title}</h1>
          <img
            style={{ width: 200 }}
            src={`http://localhost:4000/images/${x.profile_image}`}
            alt={x.title}
          />
        </div>
      ))}
    </div>
  );
};
