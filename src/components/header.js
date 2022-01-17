import React from 'react';
import { NavLink } from "react-router-dom";

export default function Basic() {
    return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <img src="./favicon.ico" width="30" height="30" alt="ToDo"/>
            <a className="navbar-brand" href='#nav' >My ToDo's List</a>
            <div id="nav">
                <ul className="navbar-nav">
                    <li className="nav-item mx-2">
                        <NavLink activeStyle={{color: "#000"}} exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item mx-2">
                        <NavLink activeStyle={{color: "#000"}} exact to="/about">About</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <footer className='card-footer text-center'>
    deepkrg17@github
    </footer>
    </>
)
}