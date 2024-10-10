import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form, Row, Col } from 'react-bootstrap';

export default function EditProperty(props) {
    const { property, updateProperty, agentOptions } = props;

    const [show, setShow] = useState(false);
    const [address, setAddress] = useState(property.address);
    const [imageURL, setImageURL] = useState(property.imageURL);
    const [price, setPrice] = useState(property.price);
    const [agentName, setAgentName] = useState(property.agent.name);
    const [bedroomCount, setBedroomCount] = useState(property.bedroomCount);
    const [bathroomCount, setBathroomCount] = useState(property.bathroomCount);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        event.preventDefault();

        const agent = agentOptions.find((agent) => agent.name === agentName);

        updateProperty({
            propertyId: property.propertyId,
            address: address,
            imageURL: imageURL,
            price: price,
            agentId: agent.agentId,
            bedroomCount: bedroomCount,
            bathroomCount: bathroomCount

        });

        handleClose();
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Edit property
            </Button>

            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Property</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="editModal" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formGridAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                required
                                value={address}
                                type="text"
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridImageURL">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control
                                value={imageURL}
                                type="url"
                                onChange={(e) => setImageURL(e.target.value)}
                            />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control
                                    required
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAgent">
                                <Form.Label>Agent</Form.Label>
                                <Form.Select
                                    required
                                    value={agentName}
                                    onChange={(e) => setAgentName(e.target.value)}
                                >
                                    {Array.isArray(agentOptions) &&
                                        agentOptions.map((agent, i) => (
                                            <option key={i} value={agent.name}>
                                                {agent.name}
                                            </option>
                                        ))}
                                </Form.Select>
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridBedroomCount">
                                <Form.Label>Bedroom Count</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    value={bedroomCount}
                                    onChange={(e) => setBedroomCount(e.target.value)}
                                />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridBathroomCount">
                                <Form.Label>Bathroom Count</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    value={bathroomCount}
                                    onChange={(e) => setBathroomCount(e.target.value)}
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
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
