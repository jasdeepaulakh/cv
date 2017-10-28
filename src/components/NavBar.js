import React from 'react';
import { NavLink } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    close(){
        if(this.state.isOpen ===true){
        this.setState({
            isOpen: false
        })}
    }

    render() {
        return (
            <div>
                <Navbar className="navbar navbar-toggleable-md fixed-top navbar-inverse bg-primary">

                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="navbar-nav">
                            <NavItem>
                                <NavLink onClick={this.close.bind(this)} className="nav-link" exact to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.close.bind(this)} className="nav-link" to="/about">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.close.bind(this)} className="nav-link" to="/work">Work</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.close.bind(this)} className="nav-link" to="/education">Education</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this.close.bind(this)} className="nav-link" to="/skills">Skills</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>

        )
    }
}

