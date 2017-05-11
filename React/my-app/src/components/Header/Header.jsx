import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import * as actions from '../../actions';

class Header extends Component {
    authButton() {
        const btnClass = this.props.auth ? 'btn-warning' : 'btn-success';

        return <button
            onClick={() => this.props.toggleAuth(!this.props.auth)}
            className={classnames('btn', btnClass)}
        >
            {this.props.auth ? 'Sign Out' : 'Sign In'}
        </button>;
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

const mapStateToProps = ({ auth }) => { return { auth }; };

export default connect(mapStateToProps, actions)(Header);
