import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { EmployeesCollection } from '../../../imports/collections/employees';

class Employees extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <div className="employees">
                    Employees
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
