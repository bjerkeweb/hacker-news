import React, { useEffect, useState } from 'react';
import { fetchUser, fetchPosts } from '../utils/api';
import { formatDate } from '../utils/helpers';

import Loading from './Loading';
import PostList from './PostList';

export default function User({ match }) {
  let userId = match.params.id;
  const [ userLoading, setUserLoading ] = useState( true );
  const [ user, setUser ] = useState( null );
  const [ postsLoading, setPostsLoading ] = useState( true );
  const [ posts, setPosts ] = useState( null );

  useEffect( () => {
    (async function() {
      setUserLoading( true );
      let user = await fetchUser( userId );
      setUser( user );
      setUserLoading( false );

      setPostsLoading( true );
      let posts = await fetchPosts( user.submitted.slice( 0, 30 ) );
      setPosts( posts );
      setPostsLoading( false );
    })();
  }, [ userId ] );

  return (
    <>
      { userLoading
        ? <Loading />
        : <div className="user-header">
            <h1 className="user-title">{ user.id }</h1>
            <div className="user-meta">
              <span>joined <b>{ formatDate( user.created ) }</b> </span>
              <span>has <b>{user.karma.toLocaleString()}</b> karma</span>
              { user.about &&
                <p className="user-about" dangerouslySetInnerHTML={{ __html: user.about }} />
              }
            </div>
          </div>
      }
      {
        postsLoading
        ? !userLoading && <Loading />
        : <>
            <h3>Posts:</h3>
            <PostList posts={ posts } />
          </>
      }
    </>
  )
}