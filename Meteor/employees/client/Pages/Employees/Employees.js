import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { EmployeesCollection } from '../../../imports/collections/employees';
import EmployeeDetail from './Employee';

class Employees extends Component {

    render() {
        return (
            <div>
                <div className="employees">
                    {this.props.employees.map(employee =>
                        <EmployeeDetail key={employee._id} employee={employee} />)}
                </div>
            </div>
        );
    }
}

Employees = createContainer(() => {
    Meteor.subscribe('employees');
    const employees = EmployeesCollection.find({}).fetch();
    return { employees };
}, Employees);

export default Employees;
