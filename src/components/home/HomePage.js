import React from 'react';
import {Link} from 'react-router-dom';

class HomePage extends React.Component{
    render() {
      return (
        <div className="jumbotron w-100">
            <h1>Movie Database</h1>
            <p>Users are free to search, see and browse the results from the Movie DB</p>
          <Link to="movies" className="btn btn-primary btn-lg">Browse</Link>
        </div>
      );
    }
}

export default HomePage;
