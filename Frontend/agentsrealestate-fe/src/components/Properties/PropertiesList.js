import React from "react";
import { Container, Row } from "react-bootstrap";
import PropertyCard from "./PropertyCard";
import AddProperty from "./AddProperty";
import { useState, useEffect, useRef } from 'react';
import { successToast } from '../utils/toasts';

export default function PropertiesList() {
    const initialized = useRef(false);
    const [isLoading, setIsLoading] = useState(true);
    const [properties, setProperties] = useState([null]);
    const [agentOptions, setAgentOptions] = useState(null);

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true;

            getAllProperties();
            getAgentOptions();
        }
    }, []);

    function getAgentOptions() {
        (async () => {
            const agentResponse = await fetch("http://localhost:8080/api/v1/agents", {
                method: "GET"
            });

            const agents = await agentResponse.json()
            setAgentOptions(agents);
        })();
    }

    function getAllProperties() {
        (async () => {
            const response = await fetch("http://localhost:8080/api/v1/properties", {
                method: "GET"
            });

            const properties = await response.json()
            setProperties(properties);
            setIsLoading(false)

        })();
    }
    if (isLoading) {
        return <div><h1>Loading...</h1></div>
    }

    function addProperty(address, imageURL, price, propertyId, bathroomCount, bedroomCount) {
        console.log("PropertiesList addProperty");

        var propertyRequestDTO = {
            address: address,
            propertyId: propertyId,
            imageURL: imageURL,
            price: price,
            bedroomCount: bedroomCount,
            bathroomCount: bathroomCount
        }

        fetch(`http://localhost:8080/api/v1/properties`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(propertyRequestDTO)
        })
            .then(async response => {
                const isJson = response.headers
                    .get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                console.log("data is: " + data.address)

                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    console.log("post error occurred");
                    return Promise.reject(error);
                }

                if (response.status === 201) {
                    successToast("Succesfully listed a property!")
                }

                getAllProperties()

            });
    }

    function updateProperty(updatedProperty) {
        var propertyRequestDTO = {
            address: updatedProperty.address,
            agentId: updatedProperty.agentId,
            imageURL: updatedProperty.imageURL,
            price: updatedProperty.price,
            bedroomCount: updatedProperty.bedroomCount,
            bathroomCount: updatedProperty.bathroomCount
        }
        fetch(`http://localhost:8080/api/v1/properties/${updatedProperty.propertyId}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(propertyRequestDTO)
        })
            .then(async response => {
                const isJson = response.headers
                    .get('content-type')?.includes('application/json');
                const data = isJson && await response.json();
                console.log("data is: " + data.address)

                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    console.log("put error occurred");
                    return Promise.reject(error);
                }

                if (response.status === 200) {
                    successToast("Succesfully modified a property!")
                }
                getAllProperties();


            });

    }

    async function deletePropertyHandler(propertyId) {
        const response = await fetch(`http://localhost:8080/api/v1/properties/${propertyId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => {

                if (response.status === 204) {
                    getAllProperties();
                    successToast("Delete successful!")
                }
            })
            .catch(function (error) {
                console.log("an unknown error occurred");
                return Promise.reject(error);
            });
            
    }



    return (
        <Container fluid>
            <AddProperty addProperty={addProperty} agentOptions={agentOptions} />
            <Row className='justify-content-evenly'>
                {properties && properties.map((property) =>
                    <PropertyCard
                        key={property.propertyId}
                        property={property}
                        updateProperty={updateProperty}
                        agentOptions={agentOptions}
                        onDeletePropertyHandler={deletePropertyHandler}
                    />
                )}
            </Row>
        </Container>
    );
}
