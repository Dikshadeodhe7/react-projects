import React from 'react';
import moment from 'moment/moment';

const Article = ({id, title, length, snippet, date}) => {
  return (
    <article>
        <div className="post">
            <h2>{title}</h2>

            <div className='post-info'>
                <span>{moment(date).format('dddd Do, YYYY')}</span>
                <span>{length} min to read</span>
            </div>
            <p>{snippet}</p>
        </div>
    </article>
  );
}

export default Article;
