import React from 'react';
import {NavLink} from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <nav>
      <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
      {" | "}
      <NavLink to="/movies" activeClassName="active">Movies</NavLink>
      {" | "}
      <NavLink to="/about" activeClassName="active">About</NavLink>
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

export default Header;
