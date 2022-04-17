import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const EmployeeForm = (props) => {
    const [employee, setEmployee] = useState(() => {
        return {
            employee_Name: props.employee ? props.employee.employee_Name : '',
            employee_Position: props.employee ? props.employee.employee_Position : '',
            email_Address: props.employee ? props.employee.email_Address : '',
            salary: props.employee ? props.employee.salary : '',
            date: props.employee ? props.employee.date : ''
        };
    });

    const [errorMsg, setErrorMsg] = useState('');
    const { employee_Name, employee_Position, email_Address, salary } = employee;
email_Address
    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [employee_Name, employee_Position, email_Address, salary];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
        const value = `${field}`.trim();
        return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
            const employee = {
                id: uuidv4(),
                employee_Name,
                employee_Position,
                email_Address,
                salary,
                date: new Date()
            };
            props.handleOnSubmit(employee);
        } 
        else {
            errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'salary':
                if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                setEmployee((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
                }
                break;
            default:
                setEmployee((prevState) => ({
                ...prevState,
                [name]: value
                }));
        }
    };

    return (
        <div className="main-form">
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <Form onSubmit={handleOnSubmit}>
            <Form.Group controlId="employee_Name">
                <Form.Label>Employee Name</Form.Label>
                <Form.Control
                    className="input-control"
                    type="text"
                    name="employee_Name"
                    value={employee_Name}
                    placeholder="Enter name of employee"
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="employee_Position">
                <Form.Label>Position</Form.Label>
                <Form.Control
                    className="input-control"
                    type="text"
                    name="employee_Position"
                    value={employee_Position}
                    placeholder="Enter position of employee"
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="email_Address">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    className="input-control"
                    type="email"
                    name="email_Address"
                    value={email_Address}
                    placeholder="Enter email address"
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId="salary">
                <Form.Label>Salary</Form.Label>
                <Form.Control
                    className="input-control"
                    type="text"
                    name="salary"
                    value={salary}
                    placeholder="Enter salary"
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-btn">
            Submit
            </Button>
        </Form>
        </div>
    );
};

export default EmployeeForm;