import React from 'react';
import ReactDOM from 'react-dom';
import MovieDetailPage from "./MovieDetailPage";
import TestRenderer from 'react-test-renderer';
import expect from 'expect';

describe('MovieDetailPage Component', () => {

    it('renders without crashing', () => {

        let match = {
            params:{
                id:1
            }
        };

        let div = document.createElement('div');
        ReactDOM.render(<MovieDetailPage match={match}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });


});