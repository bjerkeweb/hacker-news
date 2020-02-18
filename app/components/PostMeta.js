import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../utils/helpers';

export default function PostMeta({ by, time, id, decendants }) {
  return (
    <div className="post-meta">
      <span>by { by }</span>
      <span>on { formatDate( time ) }</span>
    </div>
  )
}