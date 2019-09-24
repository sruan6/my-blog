/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { postsQuery } from '../../../../schema/schema';

export const Posts = () => {
  const array = [];
  const { data, loading } = useQuery(postsQuery);

  // console.log('my-data', myData.posts);

  // console.log(myData.posts);
  // if loading
  if (loading) {
    // return animination in the future
    return <div />;
  }
  const { posts } = data;
  for (let i = posts.length - 1; i >= 0; i--) {
    array.push(posts[i]);
  }
  console.log('array', array);
  // else
  return (
    <div className="wrapper">
      <table className="table">
        <thead className="thead">
          <tr className="thead-tr">
            <th className="thead-th"></th>
            <th className="thead-th">Title</th>
            <th className="thead-th">Stars</th>
            <th className="thead-th">Rating</th>
            <th className="thead-th">Genre</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {array.map((item, i) => (
            <tr className="tbody-tr" key={i}>
              <td className="tbody-td">
                {item.profile_image ? (
                  <img
                    src={`images/${item.profile_image}`}
                    className="td-image"
                    alt={item.title}
                  />
                ) : (
                  <img
                    src="images/blank.jpeg"
                    className="td-image"
                    alt="null"
                  />
                )}
              </td>
              <td className="tbody-td">
                <Link className="td-link" to={`game=${item.uniqueid}`}>
                  <h2 className="td-title"> {item.title} </h2>
                </Link>
              </td>
              <td className="tbody-td">
                <h2 className="td-rating">{item.diffculty}</h2>
              </td>
              <td className="tbody-td">
                <h2 className="td-rating">{item.rating}</h2>
              </td>
              <td className="tbody-td">
                <h2 className="td-company">{item.genre}</h2>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
