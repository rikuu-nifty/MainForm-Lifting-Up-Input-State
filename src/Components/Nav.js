import React from 'react';
import { NavLink } from 'react-router-dom';
const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-center">
                <a className="navbar-brand mx-3" href="#">NavBar</a>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link mx-3" activeClassName="active"> <b> Home </b></NavLink>
                        </li><b></b>
                        <li className="nav-item">
                            <NavLink to="/profile" className="nav-link mx-3" activeClassName="active"><b>Profile</b></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className="nav-link mx-3" activeClassName="active"><b>Contact Us</b></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/mymainforms" className="nav-link mx-3" activeClassName="active"><b>Main Forms</b></NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
