import React, { useEffect, useState } from 'react';
import { fetchItem, fetchComments } from '../utils/api';
import Loading from './Loading';
import Comment from './Comment';
import PostMeta from './PostMeta';
import Title from './Title';

export default function Post({ match }) {
  const postId = match.params.id;
  const [ loadingPost, setLoadingPost ] = useState( true );
  const [ post, setPost ] = useState( null );
  const [ loadingComments, setLoadingComments ] = useState( true );
  const [ comments, setComments ] = useState( null );
  
  useEffect( () => {
    (async function() {
      setLoadingPost( true );
      let post = await fetchItem( postId );
      setPost( post );
      setLoadingPost( false );

      setLoadingComments( true );
      let comments = await fetchComments( post.kids || [] );
      setComments( comments );
      setLoadingComments( false );
    })();
  }, [] );

  return (
    <>
      { loadingPost
        ? <Loading />
        : <div className="post-header">
            <h1 className="post-title">
              <Title
                url={ post.url }
                title={ post.title }
                id={ post.id }
                className="post-title"
              />
            </h1>
            <PostMeta
              by={ post.by }
              time={ post.time }
              descendants={ post.descendants }
              id={ post.id }
            />
          </div>
      }
      { loadingComments
        ? !loadingPost && <Loading />
        : <>
          { comments.map( c => <Comment key={ c.id } comment={ c } /> ) }
        </>
       }
    </>
  )
}