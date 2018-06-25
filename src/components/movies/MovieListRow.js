import React from 'react';
import PropTypes from 'prop-types';

const MovieListRow = ({movie, onClick, imageURI}) => {
    return (
        <tr onClick={onClick} id={movie.id} className="row-hover">
            <td>{movie.poster_path && <img src={imageURI+'h50/'+movie.poster_path} alt={movie.title}/>}</td>
            <td>{movie.title}</td>
            <td>{movie.release_date}</td>
            <td>{movie.original_language}</td>
            <td>{movie.popularity}</td>
            <td>{movie.vote_average}</td>
        </tr>
    );
};

MovieListRow.propTypes = {
    movie: PropTypes.object.isRequired
};

export default MovieListRow;