import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './components/App';
import Routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render((

    <BrowserRouter>
        <App loading={false}>
            <Routes/>
        </App>
    </BrowserRouter>

), document.getElementById('root'));