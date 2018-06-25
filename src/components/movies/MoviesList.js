import React from 'react';
import PropTypes from 'prop-types';
import MovieListRow from './MovieListRow';

const MoviesList = ({movies, onRowClick, imageURI}) => {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Title</th>
                <th>Release Date</th>
                <th>Language</th>
                <th>Popularity</th>
                <th>Rating</th>
            </tr>
            </thead>
            <tbody>
            {movies.map(movie =>
                <MovieListRow onClick={onRowClick} key={movie.id} movie={movie} imageURI={imageURI}/>
            )}
            </tbody>
        </table>
    );
};


MoviesList.propTypes = {
    movies: PropTypes.array.isRequired
};


export default MoviesList;