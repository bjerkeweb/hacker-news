import React, { useEffect, useState } from 'react';
import { fetchPost, fetchMainPosts } from '../utils/api';
import PropTypes from 'prop-types';
import PostsList from './PostList';

export default function Posts({ type }) {
  const [ posts, setPosts ] = useState( undefined );
  const [ loading, setLoading ] = useState( true );

  useEffect( () => {
    (async function() {
      setLoading( true );
      let posts = await fetchMainPosts( type );
      setPosts( posts );
      setLoading( false );
    })();
  }, [ type ] );

  if ( loading ) {
    return <h1>Loading...</h1>
  }

  return <PostsList posts={posts} />
}

Posts.propTypes = {
  type: PropTypes.oneOf([ 'top', 'new' ])
};