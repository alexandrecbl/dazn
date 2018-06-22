import React from 'react';
import ReactDOM from 'react-dom';
import MoviesList from "./MoviesList";
import TestRenderer from 'react-test-renderer';
import expect from 'expect';

describe('MoviesPage Component', () => {
    let movies=[{
        id:1,
        title:'test',
        release_date: '10/10/17',
        popularity: 100,
        vote_average: 7,
        genre_ids: []
    }];

    it('renders without crashing', () => {

        let div = document.createElement('div');
        ReactDOM.render(<MoviesList movies={movies}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('displays a list of movies', () => {
        const testRenderer = TestRenderer.create(<MoviesList movies={movies} />);
        expect(testRenderer.root.findByType('tbody').findByType('tr')).toExist();

    });
});