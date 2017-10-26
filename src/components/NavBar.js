import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        return (
            <div class="navbar navbar-toggleable-md fixed-top navbar-inverse bg-primary">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="container">
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <a href="../" class="navbar-brand">Jasdeep Aulakh</a>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <NavLink className="nav-link" exact to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/work">Work</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/education">Education</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/skills">Skills</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/references">References</NavLink>
                            </li>
                        </ul>
                        {/*<ul class="nav navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="http://builtwithbootstrap.com/" target="_blank">Built With Bootstrap</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://wrapbootstrap.com/?ref=bsw" target="_blank">WrapBootstrap</a>
                            </li>
                        </ul>*/}

                    </div>
                </div>
            </div>
        )
    }
}

