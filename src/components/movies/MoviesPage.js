import React from 'react';
import MovieSearch from './MovieSearch';
import MoviesList from './MoviesList';
import themoviedb from "../../scripts/themoviedb";
import {API_KEY} from "../../config/config";

themoviedb.common.api_key = API_KEY;

class MoviesPage extends React.Component{
    //initializes state and calls bind functions
    constructor(props, context){
        super(props, context);
        this.state = {
            movies: {},
            searchKey: ""
        };
    }

    onSearchKeyChange = (searchKey) => {
        this.setState({searchKey: searchKey});
    };

    getMovies = () => {
        let that = this;

        const onSuccess = function (movies) {
            movies = JSON.parse(movies);
            if (movies.results && movies.results.length > 0) {
                that.setState({
                    movies: movies.results
                });
            }
        };

        const onError = function (error) {
            //TODO: Call a message lib like toastr or redirect to an error page
            //console.error(error);
        };

        themoviedb.movies.getPopular({}, onSuccess, onError)
    };

    componentDidMount = () => {
        this.getMovies();
    };

    render(){
        //destructure what you want to use. Object is still mutable!
        const {movies, searchKey} = this.state;
        let filter = movies;
        if (searchKey && typeof searchKey === "string") {
            filter = this.state.movies.filter((value) => {
                return value.title.toLowerCase().match(searchKey.trim()) != null
            })
        }

        themoviedb.search.getMovie({query:'test'});
        return (
            <div style={{width: '100%'}}>
                <h1>Search</h1>
                <MovieSearch onChange={this.onSearchKeyChange}/>
                {filter.length>0 && <MoviesList movies={filter} onRowClick={this.onRowClick} imageURI={themoviedb.common.images_uri}/>}
            </div>
        );
    }
}

MoviesPage.propTypes = {
    //myProp: PropTypes.string.isRequired
};

export default MoviesPage;

