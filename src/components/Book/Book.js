import React from 'react';

const Book = ({ bookDetails }) =>
    <div className="thumbnail">
        {/*<img src="..." alt="..." />*/}
        <div className="caption">
            <h3>{bookDetails.title}</h3>
            <p>{bookDetails.review_snippet}</p>
            <p><a target="_blank" href={bookDetails.review_link} className="btn btn-primary" role="button">Review</a></p>
        </div>
    </div>;

export default Book;