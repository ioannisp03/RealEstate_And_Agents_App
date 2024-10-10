import { useLocation } from "react-router-dom"
import AgentCard from "./Agents/AgentCard"

import { Container, Row } from "react-bootstrap"

export default function PropertyAgentsList() {

    const { state } = useLocation();



    return (
        <Container fluid className="propertyAgent">
            <Row className='justify-content-evenly'>
                <AgentCard agent={state.agent} />
            </Row>
        </Container>
    );
}