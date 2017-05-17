import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { EmployeesCollection } from '../../../imports/collections/employees';
import EmployeeDetail from './Employee';

const PER_PAGE = 20;

class Employees extends Component {
  componentWillMount() {
    this.page = 1;
  }

  onRenderMoreEmplyees() {
    Meteor.subscribe('employees', PER_PAGE * (this.page + 1));
    this.page += 1;
  }

  render() {
    return (
      <div>
        <div className="employees">
          {this.props.employees.map(employee =>
            <EmployeeDetail key={employee._id} employee={employee} />)}
        </div>
        <button onClick={this.onRenderMoreEmplyees.bind(this)} className="btn btn-primary">Load More...</button>
      </div>
    );
  }
}

Employees = createContainer(() => {
  Meteor.subscribe('employees', PER_PAGE);
  const employees = EmployeesCollection.find({}).fetch();
  return { employees };
}, Employees);

export default Employees;
