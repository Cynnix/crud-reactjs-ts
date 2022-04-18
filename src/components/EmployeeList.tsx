import React from 'react';
import _ from 'lodash';
import Employee from './Employee';

const EmployeeList = ({ employees, setEmployees}) => {
    const handleRemoveEmployee = (id) => {
        setEmployees(employees.filter((employee) => employee.id !== id));
      };
      
    return (
        <React.Fragment>
            <div className="employee-list">
                {!_.isEmpty(employees) ? (
                    employees.map((employees) => (
                        <Employee key={employees.id} {...employees} handleRemoveEmployee={handleRemoveEmployee} />
                    ))
                ) : (
                    <p className="message">No employees available.</p>
                )}
            </div>        
        </React.Fragment>
      );
}; 

export default EmployeeList;