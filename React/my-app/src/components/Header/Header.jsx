import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

class Header extends Component {
    authButton() {
        return <button className="btn btn-success">Sign In</button>;
    }

    render() {
        return (
            <nav className={classnames('navbar', 'navbar-light')}>
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources">resources</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        {this.authButton()}
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;
