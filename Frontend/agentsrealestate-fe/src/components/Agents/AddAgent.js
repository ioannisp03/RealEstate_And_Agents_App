import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function AddAgent({ addAgent }) {
    const [show, setShow] = useState(false);
    const [name, setName] = useState(null);
    const [agentPictureURL, setAgentPictureURL] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [email, setEmail] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleSubmit = (event) => {
        console.log("Agent Saved");
        event.preventDefault();
        console.log(event);
        console.log("name is:" + name);
        console.log("agentPictureURL is:" + agentPictureURL);
        console.log("phoneNumber is:" + phoneNumber);
        console.log("agentEmail is:" + email);

        if (agentPictureURL === null || agentPictureURL === "") {
            setAgentPictureURL("https://2.bp.blogspot.com/-FuE_tqGLG9k/WCX0OxGf3TI/AAAAAAAAAkw/j0J7fWBnroYb-N_DmHRCi_BT9kMR5Eg8QCLcB/s1600/stickman-42884_1280.png")

        }

        addAgent(name, agentPictureURL, phoneNumber, email);

        handleClose();
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Agent
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Agent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="addmodal" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                required
                                placeholder="Agent Name"
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridAgentPictureURL">
                            <Form.Label>Agent Picture URL</Form.Label>
                            <Form.Control
                                placeholder="HTTP://..."
                                type="url"
                                onChange={(e) => setAgentPictureURL(e.target.value)}
                            />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPhoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    required
                                    placeholder="###-###-####"
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label required>Email</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button form="addmodal" variant="primary" type="submit" >
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
