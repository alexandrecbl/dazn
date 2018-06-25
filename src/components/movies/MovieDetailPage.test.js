import React from 'react';
import ReactDOM from 'react-dom';
import MovieDetailPage from "./MovieDetailPage";
import TestRenderer from 'react-test-renderer';
import expect from 'expect';

describe('MovieDetailPage Component', () => {
    it('renders without crashing', () => {

        let div = document.createElement('div');
        ReactDOM.render(<MovieDetailPage/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });


});