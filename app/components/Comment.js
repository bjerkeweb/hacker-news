import React from 'react';
import PostMeta from './PostMeta';

export default function Comment({ comment }) {
  return (
    <div className="post-comment">
      <PostMeta
        by={ comment.by }
        time={ comment.time }
        id={ comment.id }
      />
      <p dangerouslySetInnerHTML={{ __html: comment.text }} />
    </div>
  )
}