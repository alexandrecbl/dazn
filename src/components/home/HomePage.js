import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component{
    render() {
      return (
        <div className="jumbotron">
            <h1>Movie Database</h1>
            <p>Users are free to search, see and browse the results from the Movie DB</p>
          <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
        </div>
      );
    }
}

export default HomePage;
