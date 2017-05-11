import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../actions';

class Users extends Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user) {
    return (
      <div key={user.name} className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">cheese factory</p>
        <a href="" className="btn btn-primary">Email</a>
      </div>
    );
  }

  render() {
    console.log(this.props.users);
    return (
      <div>
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => { return { users }; };

export default connect(mapStateToProps, action)(Users);
