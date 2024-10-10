import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import EditProperty from './EditProperty'

export default function PropertyCard(props) {
    const { property, updateProperty, agentOptions, onDeletePropertyHandler } = props;

    function onDelete() {
        onDeletePropertyHandler(property.propertyId);
    }

    return (

        <Card style={{ width: '25rem', borderRadius: '2rem', background: '#2a1765' }} text="light" className="mx-1 my-3">
            <LinkContainer to="/propertyagents" state={property}
                style={{ height: '100%', marginTop: '1rem' }}
                className="rounded-5">
                <Card.Img
                    variant="top"
                    src={property.imageURL}
                />
            </LinkContainer>
            <Card.Body>
                <Card.Title className="fs-2">{property.address}</Card.Title>
                <Card.Text>
                    <strong>Price: </strong>
                    ${property.price}
                </Card.Text>
              
                <Card.Text>
                    <strong>Bathrooms:  </strong>
                    {property.bathroomCount}
                </Card.Text>
                <Card.Text>
                    <strong>Bedrooms:  </strong>
                    {property.bedroomCount}
                </Card.Text>
                <Card.Text>
                    <strong>agent:  </strong>
                    {property.agent.name}
                </Card.Text>
                <Card.Text>
                    Click on the property to see the agent!
                </Card.Text>
                {window.location.pathname === "/properties" &&
                    <>
                        <EditProperty property={property} updateProperty={updateProperty} agentOptions={agentOptions} />
                        <Button className='m-3' variant="danger" onClick={onDelete}>Delete</Button>
                    </>
                }
            </Card.Body>
        </Card>


    )
}