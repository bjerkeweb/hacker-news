import React from 'react';
import PropTypes from 'prop-types';

export default function Title({ url, title, id }) {
  return url
    ? <a className='link post-title' href={ url }>{ title }</a>
    : <span className='post-title'>{ title }</span>
}

Title.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};