import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import * as actions from '../../actions';

class Header extends Component {
  authButton() {
    const btnclass = this.props.auth ? 'btn-warning' : 'btn-success';

    return <button
      type="button"
      onClick={() => this.props.toggleAuth(!this.props.auth)}
      className={classnames('btn', btnclass)}
    >
      {this.props.auth ? 'Sign Out' : 'Sign In'}
    </button>;
  }

  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-primary">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/resources" className="nav-link">Resources</Link>
            </li>
            <li className="nav-item">
              <Link to="/users" className="nav-link">Users</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              {this.authButton()}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ auth }) => { return { auth }; };

export default connect(mapStateToProps, actions)(Header);
