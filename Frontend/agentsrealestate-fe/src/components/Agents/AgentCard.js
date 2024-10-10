import React from 'react';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import EditAgent from './EditAgent';

export default function AgentCard({ agent, onDeleteAgentHandler, updateAgent }) {

    function onDelete() {
        onDeleteAgentHandler(agent.agentId);
    }

    return (
        <Card style={{ width: '20rem', borderRadius: '2rem', background: '#2a1765' }} text="light" className="mx-1 my-3">
            <LinkContainer to={"/agentproperties"} state={{ agentId: agent.agentId }}
                style={{ height: '100%', marginTop: '1rem' }}
                className="rounded-5">
                <Card.Img
                    variant="top"
                    src={agent.agentPictureURL}
                    style={{ height: '100%', marginTop: '1rem' }}
                    className="rounded-5"
                />
            </LinkContainer>
            <Card.Body>
                <Card.Title className="fs-2">{agent.name}</Card.Title>
                <Card.Text>
                    <strong>Phone Number: </strong>
                    {agent.phoneNumber}
                </Card.Text>
                <Card.Text>
                    <strong>Email: </strong>
                    {agent.email}
                </Card.Text>

                {window.location.pathname === "/agents" &&
                    <>
                        <EditAgent agent={agent} updateAgent={updateAgent} />
                        <Button className='m-3' variant="danger" onClick={onDelete}>Delete</Button>
                    </>
                }
            </Card.Body>
        </Card>
    );
}
