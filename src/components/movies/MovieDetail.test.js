import React from 'react';
import ReactDOM from 'react-dom';
import MovieDetail from "./MovieDetail";
import TestRenderer from 'react-test-renderer';
import expect from 'expect';

describe('MovieDetailPage Component', () => {

    let movie= {
        id: 1,
        title: 'test',
        release_date: '10/10/17',
        poster_path: 'c9XxwwhPHdaImA2f1WEfEsbhaFB.jpg',
        revenue: 100,
        runtime: 100,
        status: 'released',
        imdb_id:'',
        vote_average:'5.6',
        budget:1000
    };
    
    it('renders without crashing', () => {

        let div = document.createElement('div');
        ReactDOM.render(<MovieDetail movie={movie}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('displays the intended movie', () => {
        const testRenderer = TestRenderer.create(<MovieDetail movie={movie} />);
        expect(testRenderer.root.findByType('img')).toExist();

    });


});