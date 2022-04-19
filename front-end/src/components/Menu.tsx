import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Modal, Row, Table } from "react-bootstrap";
import "../App.css";
import { FaPencilAlt, FaPlus, FaTrashAlt } from "react-icons/fa";
import { Employee } from "./Interface";

export const Menu = () => {
    const defaultUsers = [
        {
            id: 1,
            full_name: "Paul Tito C. Rebollo",
            email_address: "paultito150@gmail.com",
            age: "23",
            position: "Intern",
        },
        {
            id: 2,
            full_name: "Paul John Cay",
            email_address: "pauljohncay@yahoo.com",
            age: "22",
            position: "Quality Assurance Analyst",
        },
    ];

    const initCurrentUser = {
        id: null,
        full_name: "",
        email_address: "",
        age: "",
        position: "",
        salary: "",
    };

    const [users, setUsers] = useState(defaultUsers);
    const [show, setShow] = useState(false);
    const [newUser, setNewUser] = useState(initCurrentUser);
    const [editing, setEdit] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    const onFormSubmit = (newUser: any) => {
        const id = users.length + 1;
        setUsers([...users, {...newUser, id}]);
    };

    const onEdit = (newUser: any) => {
        setEdit(true);
        if(editing === true) {
            setNewUser({ ...newUser, newUser });
            handleShow();
        }    
    };

    const onSubmit = (newUser: any) => {
        if (editing === true) {
            onUpdateUser(newUser);
        }
        else {
            onFormSubmit(newUser);
        }
    };

    const onUpdateUser = (newUser: Employee) => {
        setEdit(false);
        let id = newUser.id;
        setUsers(users.map((i) => (i.id === id ? newUser : i)));
    };

    const onDeleteUser = (currentUser: Employee) => {
        setUsers(users.filter((i) => i.id !== currentUser.id));
    }

    return (
        <Container fluid="md">
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <div className="d-flex justify-content-betweeen customCardBody">
                                <div className="d-flex">
                                    <Button
                                        variant="primary"
                                        onClick={handleShow}
                                        title="Add Employee"
                                    >
                                        <FaPlus />
                                    </Button>
                                </div>
                                <div style={{marginLeft: "14px", marginTop: "8px"}}>
                                    <Card.Title>Add Employee</Card.Title>
                                </div>
                            </div>
                            <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email Address</th>
                                        <th>Age</th>
                                        <th>Position</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.length > 0 ? (
                                        users.map((user, index) => (
                                            <tr key={index}>
                                                <td>{user.id}</td>
                                                <td>{user.full_name}</td>
                                                <td>{user.email_address}</td>
                                                <td>{user.age}</td>
                                                <td>{user.position}</td>
                                                <td><Button variant="info"
                                                            title="Edit Employee Details"
                                                            onClick={() => onEdit(user)}
                                                    >
                                                        <FaPencilAlt />
                                                    </Button>{" "}
                                                    <Button variant="danger"
                                                            title="Delete Employee"
                                                            onClick={() => onDeleteUser(user)}
                                                    >
                                                        <FaTrashAlt />
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={6} className="text-center">
                                                No employees found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                    
                    <Modal size="lg" show={show} onHide={handleClose}>
                        <Form 
                            onSubmit={(e) => {
                                e.preventDefault();
                                onSubmit(newUser);
                            }}
                        >
                        <Modal.Header closeButton>{
                            editing === true 
                            ? <Modal.Title>Edit User</Modal.Title>
                            : <Modal.Title>Add User</Modal.Title>
                        }
                        </Modal.Header>
                        
                        <Modal.Body>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={newUser.full_name}
                                    required
                                    onChange={(e) =>
                                        setNewUser({ ...newUser, full_name: e.target.value })
                                    }
                                    placeholder="Enter Full Name"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicAddress">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={newUser.email_address}
                                    onChange={(e) =>
                                        setNewUser({ ...newUser, email_address: e.target.value })
                                    }
                                    placeholder="Enter Email Address"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={newUser.age}
                                    onChange={(e) =>
                                        setNewUser({ ...newUser, age: e.target.value })
                                    }
                                    placeholder="Enter Age"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPosition">
                                <Form.Label>Position</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={newUser.position}
                                    onChange={(e) =>
                                        setNewUser({ ...newUser, position: e.target.value })
                                    }
                                    placeholder="Enter Position"
                                />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            
                            {editing === true ? (
                                <Button variant="primary" type="submit" onClick={handleClose}>
                                    Update
                                </Button>
                            ) : (
                                <Button variant="primary" disabled={!newUser.full_name} type="submit" onClick={handleClose}>
                                    Submit
                                </Button>
                            )}
                            </Modal.Footer>
                        </Form>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
};