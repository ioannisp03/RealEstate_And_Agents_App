import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, Row, Col } from 'react-bootstrap';

export default function EditAgent(props) {
    const { agent, updateAgent } = props;
    const [show, setShow] = useState(false);
    const [name, setName] = useState(agent.name);
    const [phoneNumber, setPhoneNumber] = useState(agent.phoneNumber);
    const [email, setEmail] = useState(agent.email);
    const [agentPictureURL, setAgentPictureURL] = useState(agent.agentPictureURL);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        console.log("Agent Saved ");
        event.preventDefault();
        console.log(event);
        console.log("Name is:" + name);
        console.log("Phone Number is:" + phoneNumber);
        console.log("Email is:" + email);
        console.log("agentPictureURL is:" + agentPictureURL);

        updateAgent({
            agentId: agent.agentId,
            name: name,
            phoneNumber: phoneNumber,
            email: email,
            agentPictureURL: agentPictureURL
        });

        handleClose();
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit Agent
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Edit Agent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="editModal" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                value={name}
                                required
                                type="text"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridPhoneNumber">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                value={phoneNumber}
                                required
                                onChange={(e) => {
                                    setPhoneNumber(e.target.value);
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                value={email}
                                required
                                type="email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                            />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridAgentPictureURL">
                                <Form.Label>Agent picture URL</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={agentPictureURL}
                                    onChange={(e) => {
                                        setAgentPictureURL(e.target.value);
                                    }}
                                />
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-3" id="formGridCheckbox">
                            <Form.Check type="checkbox" label="Check" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button form="editModal" variant="primary" type="submit">
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
