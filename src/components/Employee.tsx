import React from "react";
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Employee = ({
    id,
    employee_Name,
    employee_Position,
    email_Address,
    salary,
    date,
    handleRemoveEmployee
}) => {
    const history = useHistory();
    
    return (
        <Card style={{ width: '20rem' }} className="employee">
            <Card.Body>
                <Card.Title className="employee-title">{employee_Name}</Card.Title>
                    <div className="employee-details">
                        <div>Position: {employee_Position}</div>
                        <div>Email Address: {email_Address} </div>
                        <div>salary: {salary} </div>
                        <div>Date: {new Date(date).toDateString()}</div>
                    </div>
                <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
                    Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => handleRemoveEmployee(id)}>
                    Delete
                </Button>
            </Card.Body>
        </Card>
    )
};

export default Employee;