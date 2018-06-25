import React from 'react';
import PropTypes from 'prop-types';
import MovieListRow from './MovieListRow';

class MoviesList extends React.Component {

    constructor(props, context){
        super(props, context);
        this.onRowClick = this.onRowClick.bind(this);
    }

    onRowClick = (e) => {
        this.context.router.history.push("movie/"+e.currentTarget.id);
    };

    render() {
        let {movies, imageURI} = this.props;
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
                    <MovieListRow onClick={this.onRowClick} key={movie.id} movie={movie} imageURI={imageURI}/>
                )}
                </tbody>
            </table>
        );
    }
}

MoviesList.propTypes = {
    movies: PropTypes.array.isRequired
};

MoviesList.contextTypes = {
    router: PropTypes.object
};


export default MoviesList;