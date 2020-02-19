import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../utils/helpers';
import { Link } from 'react-router-dom';

export default function PostMeta({ by, time, id, descendants }) {
  return (
    <div className="post-meta">
      <span>by { by }</span>
      <span>on { formatDate( time ) } </span>
      { typeof descendants === 'number' && (
        <span>
          with <Link to={`/post/${id}`}>{ descendants }</Link> comments
        </span>
      ) }
    </div>
  )
}