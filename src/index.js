import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './components/App';
import Routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render((

    <BrowserRouter>
        <App loading={false}>
            <Routes/>
        </App>
    </BrowserRouter>

), document.getElementById('root'));