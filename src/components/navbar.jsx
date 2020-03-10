import React, { Component } from 'react';

class NavBar extends Component{
    render(){
        return(
        <nav className="navbar navbar-light bg-light">
            <p className="navbar-brand" href="#">
                Navbar{" "}
                <span className="badge badge-pill badge-secondary">
                    {this.props.totalCounters}
                </span>
            </p>
        </nav>
      )
    }
}
export default NavBar;