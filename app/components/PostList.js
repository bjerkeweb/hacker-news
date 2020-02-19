import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import PostMeta from './PostMeta';

export default function PostList({ posts }) {
  if ( posts.length === 0 ) {
    return (
      <p>This user hasn't posted yet</p>
    )
  }

  return (
    <ul className="post-list">
      {posts.map( post => {
        return (
          <li
            key={ post.id }
            className='post'
          >
            <Title
              url={ post.url }
              id={ post.id }
              title={ post.title }
            />
            <PostMeta
              by={ post.by }
              time={ post.time }
              id={ post.id }
              descendants={ post.descendants }
            />
          </li>
        )
      })}
    </ul>
  )
}