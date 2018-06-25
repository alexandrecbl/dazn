import React from 'react';
import PropTypes from 'prop-types';
import themoviedb from "../../scripts/themoviedb";
import toastr from "toastr";

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
            toastr.error('Error while fetching movie!');
        };

        themoviedb.movies.getById({id:this.props.match.params.id}, onSuccess, onError)
    };

    componentDidMount = () => {
        this.getMovieDetails();
    };


    render() {
        return (
            <div className='container'>
                <div className='row'>

                </div>
            </div>
        )
    }
}

MovieDetailPage.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default MovieDetailPage;