import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function AddProperty({ addProperty, agentOptions }) {

    const [show, setShow] = useState(false);

    const [address, setAddress] = useState(null)
    const [imageURL, setImageURL] = useState(null)
    const [price, setPrice] = useState(null)
    const [agentName, setAgentName] = useState(null)
    const [bedroomCount, setBedroomCount] = useState(null)
    const [bathroomCount, setBathroomCount] = useState(null)


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    const handleSubmit = (event) => {
        console.log("Property Saved!");
        event.preventDefault() 
        console.log(event);
        console.log("address is:" + address)
        console.log("ImageURL:" + imageURL) 
        console.log("Price:" + price)
        console.log("bedroomCount is:" + bedroomCount)
        console.log("bathroomCount is:" + bathroomCount)


        if (imageURL === null || imageURL ==="") {
            setImageURL("https://shorturl.at/blmR2");
        }

        var agent = agentOptions.find(agent => agent.name === agentName)

        addProperty(address, imageURL, price, agent.agentId, bedroomCount, bathroomCount)
        handleClose();
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Property
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Property</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="addmodal" onSubmit={handleSubmit}>

                        <Form.Group className="mb-3" controlId="formGridAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control required
                                placeholder="Your Property"
                                type="text"
                                onChange={(e) =>
                                    setAddress(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGridImageURL">
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control placeholder="HTTP://..."
                                type="url"
                                onChange={(e) =>
                                    setImageURL(e.target.value)} />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPrice">
                                <Form.Label>Price</Form.Label>
                                <Form.Control required
                                    onChange={(e) =>
                                        setPrice(e.target.value)}>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridAgent">
                                <Form.Label>Agent</Form.Label>
                                <Form.Select required
                                    defaultValue="Choose..."
                                    onChange={(e) =>
                                        setAgentName(e.target.value)}>
                                    <option value="">Choose...</option>
                                    {agentOptions && agentOptions.map((agent, i) => {
                                        return (
                                            <option key={i} value={agent.name}>
                                                {agent.name}
                                            </option>
                                        )
                                    })}
                                </Form.Select>
                            </Form.Group>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridBedroomCount">
                                    <Form.Label>Bedroom Count</Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
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
                                        onChange={(e) => setBathroomCount(e.target.value)}
                                    />
                                </Form.Group>
                            </Row>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button form="addmodal" variant="primary" type="submit">
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

