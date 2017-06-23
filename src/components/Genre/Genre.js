import React from 'react';
import './Genre.scss';
import classnames from 'classnames';

const Genre = ({ genreList, setGenre, selectedGenre }) =>
    <div className="genre-section container">
        <div className="row">
            {
                Object.keys(genreList).map((genreKey, index) =>
                    <button onClick={(event) => setGenre(event)}
                            className={ classnames(
                                'btn btn-default',
                                'genre-button',
                                { selected: selectedGenre === genreKey }
                            ) }
                            key={index}
                            type="button"
                            data-attribute-genre={genreKey}>
                        {genreList[genreKey]}
                    </button>
                )
            }
        </div>
    </div>;

export default Genre;