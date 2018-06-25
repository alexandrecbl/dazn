import React from 'react';
import MovieSearch from './MovieSearch';
import MoviesList from './MoviesList';
import themoviedb from "../../scripts/themoviedb";
import {Subject} from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import {API_KEY} from "../../config/config";

themoviedb.common.api_key = API_KEY;

class MoviesPage extends React.Component{
    //initializes state and calls bind functions
    constructor(props, context){
        super(props, context);
        this.state = {
            movies: null,
            defaultMovies: [],
            searchKey: "",
            debounced: "",
            error:""
        };

        //Create subject
        this.onSearch$ = new Subject();
        this.onSearchKeyChange = this.onSearchKeyChange.bind(this);
    }

    onSearchKeyChange = (searchKey) => {
        this.setState({searchKey});
        //iterate observable
        this.onSearch$.next(searchKey);
    };

    searchMovies = (debounced) => {
        let that = this;
        themoviedb.search.getMovie({query:debounced}, function (json) {
            let movies = JSON.parse(json);
            if (movies.results && movies.results.length > 0) {
                that.setState({
                    movies: movies.results,
                    debounced: '',
                    error:''
                });
            }else{
                //toastr.warning('Movie Not Found!');
                that.setState({
                    error: 'Movie Not Found!'
                });
            }
        }, function () {
            //toastr.error('Error whilst searching movies!');
        });
    };

    getDefaultMovies = () => {
        let that = this;

        const onSuccess = function (movies) {
            movies = JSON.parse(movies);
            if (movies.results && movies.results.length > 0) {
                that.setState({
                    defaultMovies: movies.results
                });
            }
        };

        const onError = function (error) {
            //toastr.error('Error whilst searching movies!');
        };

        themoviedb.movies.getPopular({}, onSuccess, onError)
    };

    subscribe = () => {
       //subscribe observable with debounce so we restrict api calls
        this.subscription = this.onSearch$.pipe(
            debounceTime(300))
            .subscribe(debounced => this.searchMovies(debounced));
    };

    componentDidMount = () => {
        this.subscribe();
        this.getDefaultMovies();
    };

    componentWillUnmount() {
        //unsubscribe observable
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    render(){
        //destructure what you want to use. Object is still mutable!
        const {movies, defaultMovies, searchKey, error} = this.state;
        //display the default list of movies if there is no search key
        let filter = searchKey && movies ? movies : defaultMovies;

        return (
            <div className="w-100">
                <h1>Search</h1>
                <MovieSearch onChange={this.onSearchKeyChange} error={error}/>
                {filter.length>0 && <MoviesList movies={filter} onRowClick={this.onRowClick} imageURI={themoviedb.common.images_uri}/>}
            </div>
        );
    }
}


export default MoviesPage;

