import React from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';
import Header from './common/Header';

class App extends React.Component{
    render(){
        return (
            <div className="container-fluid">
                <Header loading={this.props.loading} />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired
};


export default App;
