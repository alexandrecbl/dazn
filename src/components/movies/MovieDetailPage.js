import React from 'react';
import themoviedb from "../../scripts/themoviedb";
import MovieDetail from './MovieDetail';

class MovieDetailPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {movie: {}};
    }

    getMovieDetails = () => {
        let that = this;

        const onSuccess = function (movie) {
            movie = JSON.parse(movie);
            if (movie) {
                that.setState({
                    movie: movie
                });
            }
        };

        const onError = function (error) {
            //toastr.error('Error while fetching movie!');
        };

        themoviedb.movies.getById({id: this.props.match.params.id}, onSuccess, onError)
    };

    componentDidMount = () => {
        this.getMovieDetails();
    };


    render() {
        return (
            <MovieDetail movie={this.state.movie}/>
        )
    }
}

export default MovieDetailPage;