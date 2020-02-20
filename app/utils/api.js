const api = 'https://hacker-news.firebaseio.com/v0';
const opts = '.json?print=pretty';

function onlyStories( post ) {
  return post.type === 'story';
}

function onlyComments( post ) {
  return post.type === 'comment';
}

function removeDead( post ) {
  return post.dead !== true;
}

function removeDeleted( post ) {
  return post.deleted !== true;
}

export async function fetchItem( id ) {
  let res = await fetch( `${ api }/item/${ id }${ opts }` );
  let json = await res.json();
  return json;
}

export async function fetchPosts( ids ) {
  let posts = await Promise.all( ids.map( fetchItem ) );

  return posts
  .filter( Boolean )
  .filter( removeDead )
  .filter( removeDeleted)
  .filter( onlyStories );
}

export async function fetchComments( ids ) {
  let comments = await Promise.all( ids.map( fetchItem ) );

  return comments
  .filter( Boolean )
  .filter( removeDead )
  .filter( removeDeleted )
  .filter( onlyComments );
}

export async function fetchUser( id ) {
  let res = await fetch( `${ api }/user/${ id }${ opts }` )
  let json = await res.json();

  return json;
}

export async function fetchMainPosts( type ) {
  let res = await fetch( `${ api }/${ type }stories${ opts }` );
  let ids = await res.json();
  
  ids = ids.slice( 0 , 50 );

  let posts = await Promise.all( ids.map( fetchItem ) );

  return posts
  .filter( Boolean )
  .filter( removeDead )
  .filter( onlyStories )
  .filter( removeDeleted );
}