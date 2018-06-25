import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
                <NavLink to="/movies" activeClassName="active">Movies</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
            </nav>
        </header>
    );
};

export default Header;
