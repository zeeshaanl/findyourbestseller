import React from 'react';
import Book from '../Book/Book';
import './BookResults.scss';

const BookResults = ({ resultsArray, loadingBooks }) => {
    const loadingAnimation = <div className='uil-ripple-css'>
        <div></div>
        <div></div>
    </div>;
    const bookResultsBody = !loadingBooks && resultsArray ?
        resultsArray.map((book, index) =>
            <div key={index} className="col-sm-6 col-md-4">
                <Book bookDetails={book} />
            </div>
        ) : <div> {loadingAnimation} </div>;
    return (<div className="book-results-block">
        <div className="book-details container-fluid">
            <div className="row">
                { bookResultsBody }
            </div>
        </div>
    </div>)
};

export default BookResults;