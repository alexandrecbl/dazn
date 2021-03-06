import React from 'react';
import {Link} from "react-router-dom";
import themoviedb from "../../scripts/themoviedb";
import MovieDetail from './MovieDetail';

class MovieDetailPage extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {movie: {}, loading:true};
    }

    getMovieDetails = () => {
        let that = this;

        const onSuccess = function (movie) {
            movie = JSON.parse(movie);
            if (movie) {
                that.setState({
                    movie: movie,
                    loading:false
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
            <div>
                {!this.state.loading && <Link to={{
                    pathname: '/movies',
                    search: this.props.location.search
                }}> &lt;Back</Link>}
                <MovieDetail movie={this.state.movie} loading={this.state.loading}/>
            </div>

        )
    }
}

export default MovieDetailPage;