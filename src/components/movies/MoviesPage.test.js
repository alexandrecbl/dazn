import React from 'react';
import ReactDOM from 'react-dom';
import MoviesPage from "./MoviesPage";
import TestRenderer from 'react-test-renderer';
import expect from 'expect';

describe('MoviesPage Component', () => {
    it('renders without crashing', () => {

        let location = {
            search:'test'
        };

        let div = document.createElement('div');
        ReactDOM.render(<MoviesPage location={location}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

});