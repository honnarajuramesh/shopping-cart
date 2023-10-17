import React, { Component } from 'react'

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-light bg-light" >
                    <a className="navbar-brand" href="##"> Navbar </a>
                    <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>    
                </nav>
            </React.Fragment>
           
        )
    }
}

export default NavBar;
