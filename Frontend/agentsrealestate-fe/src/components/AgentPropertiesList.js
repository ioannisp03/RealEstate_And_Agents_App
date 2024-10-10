import { useLocation } from "react-router-dom"
import { useState, useEffect } from 'react'
import { Container, Row } from "react-bootstrap"
import PropertyCard from "./Properties/PropertyCard"


export default function AgentProperties() {
    const { state } = useLocation();
    const [properties, setProperties] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [agentOptions, setAgentOptions] = useState(null);

    useEffect(() => {
        (async () => {
            const agentResponse = await fetch("http://localhost:8080/api/v1/agents", {
                method: "GET"
            });

            const agents = await agentResponse.json()
            setAgentOptions(agents)
        })();
    }, []);

    //Get the properties of this agent to show them in cards
    function getTheProperties() {

        (async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/v1/agents/${state.agentId}/properties`, {
                    method: "GET"
                });

                if (!response.ok) {
                    console.error("Failed to fetch properties:", response.statusText);
                    return;
                }

                const result = await response.json();
                const properties = result.properties;
                setProperties(properties);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching properties:", error);
            }
        })();

    }
    //calling the function when the page open 
    useEffect(() => {
        getTheProperties();
    }, []);


    if (isLoading) {
        return <div><p>Loading...</p></div>
    }

    // Create it as a function to put the data in the card 
    function updateProperty(updatedProperty) {

        var propertyRequestDTO = {
            address: updatedProperty.address,
            agentId: updatedProperty.agentId,
            imageURL: updatedProperty.imageURL,
            price: updatedProperty.price
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
                const isJson = response.headers.get('content-type')?.includes('application/json');
                const data = isJson ? await response.json() : null;

                if (!response.ok) {
                    const error = (data && data.message) || response.status;
                    console.error("Error occurred:", error);
                    return Promise.reject(error);
                }

                console.log("Property updated successfully:", data);

                // Instead of refreshing the page
                getTheProperties();
            })
            .catch(error => {
                console.error("Update property error:", error);
            });

    }


    return (
        <Container fluid className="propertyAgent">
            <Row className='justify-content-evenly'>
                {properties && properties.map((property) =>
                    <PropertyCard
                        key={property.propertyId}
                        property={property}
                        updateProperty={updateProperty}
                        agentOptions={agentOptions}
                    />
                )}
            </Row>
        </Container>
    );
}