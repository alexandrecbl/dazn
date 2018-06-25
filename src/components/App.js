import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import Header from './common/Header';

class App extends React.Component{
    render(){
        return (
            <div>
                <Header loading={this.props.loading} />
                <div id="content" className="container-fluid">{this.props.children}</div>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};


export default App;
