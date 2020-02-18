export function formatDate( timestamp ) {
  return new Date( timestamp * 1000 )
  .toLocaleDateString( 'en-us', {
    hour: 'numeric',
    minute: 'numeric'
  });
}