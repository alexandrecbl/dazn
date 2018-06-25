import React from 'react';
import PropTypes from 'prop-types';
import themoviedb from "../../scripts/themoviedb";

const MovieListRow = ({movie}) => {
    return (
        <div className='jumbotron pt-3'>

            <h1>{movie.title}</h1>
            <p>{movie.overview}</p>
            <div className='row'>
                <div className="col-sm-12 col-md-5">
                    {movie.poster_path &&
                    <img className='w-100' src={themoviedb.common.getImage({size: 'w400', file: movie.poster_path})}
                         alt={movie.title}/>}
                </div>
                <div className="col-sm-12 col-md-7">
                    <p><b>Revenue</b> ${movie.revenue}</p>
                    <p><b>Runtime</b> {movie.runtime}m</p>
                    <p><b>Release Date</b> {movie.release_date}</p>
                    <p><b>Status</b> {movie.status}</p>
                    <p><b>Rating</b>
                        <a target="_blank"
                           href={"https://www.imdb.com/title/" + movie.imdb_id}> {movie.vote_average} </a>
                    </p>
                    {movie.homepage &&
                    <p><b>Homepage:</b> <a target="_blank" href={movie.homepage}> {movie.homepage} </a></p>}
                    <p><b>Budget</b> ${movie.budget}</p>
                </div>
            </div>
        </div>
    )
};

MovieListRow.propTypes = {
    movie: PropTypes.object.isRequired
};

export default MovieListRow;