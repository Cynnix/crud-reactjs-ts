import React from "react";
import EmployeeForm from './EmployeeForm';
import { useParams } from 'react-router-dom';

const EditEmployee = ({ history, employees, setEmployees }) => {
    const { id } = useParams();
    const employeeToEdit = employees.find((employee) => employee.id === id);

    const handleOnSubmit = (employee) => {
        const filteredEmployees = employees.filter((employee) => employee.id !== id);
        setEmployees([employee, ...filteredEmployees]);
        history.push('/');
    }

    return (
        <div>
            <EmployeeForm employee={employeeToEdit} handleOnSubmit={handleOnSubmit} />
        </div>
    );
};

export default EditEmployee;