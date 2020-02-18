const api = 'https://hacker-news.firebaseio.com/v0';
const opts = '.json?print=pretty';

function onlyStories( post ) {
  return post.type === 'story';
}

function removeDead( post ) {
  return post.dead !== true;
}

function removeDeleted( post ) {
  return post.deleted !== true;
}

export async function fetchPost( id ) {
  let res = await fetch( `${api}/item/${id}${opts}` );
  let json = await res.json();
  return json;
}

export async function fetchMainPosts( type ) {
  let res = await fetch( `${api}/${type}stories${opts}` );
  let ids = await res.json();

  ids = ids.slice( 0 , 50 );

  let posts = await Promise.all( ids.map( fetchPost ) );

  return posts
  .filter( onlyStories )
  .filter( removeDead )
  .filter( removeDeleted );
}