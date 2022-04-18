import React from 'react';
import EmployeeForm from './EmployeeForm';

const AddEmployee = ({ history, employees, setEmployees}) => {
    const handleOnSubmit = (employee) => {
        setEmployees([employee, ...employees]);
        history.push('/');
    };  

    return (
        <React.Fragment>
            <EmployeeForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
};

export default AddEmployee;