import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

class Header extends Component {
  renderLinks() {
    const { authenticated } = this.props;

    const btnClass = classnames('btn', 'navbar-btn', 'pull-right', {
      'btn-warning': authenticated,
      'btn-success': !authenticated
    });

    if (authenticated) {
      return <Link className={btnClass} to="/signout">Sigh Out</Link>;
    } else {
      return [
        <Link className={btnClass} to="/signin">Sigh In</Link>,
        <Link className={btnClass} to="/signup">Sigh Up</Link>];
    }

  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <Link to="/" className="navbar-brand">Redux Auth</Link>
          {this.renderLinks()}
        </div>
      </nav>
    );
  }
}

Header = connect(({ auth: { authenticated } }) => ({ authenticated }))(Header);

export default Header;
