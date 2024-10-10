import { Container, Row } from 'react-bootstrap';
import AgentCard from './AgentCard';
import AddAgent from './AddAgent';
import { useState, useEffect } from 'react';
import { errorToast } from '../utils/toasts';
import { successToast } from '../utils/toasts';



export default function AgentsList() {
  const [agents, setAgents] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getAllAgents();
  }, []);


  function getAllAgents() {
    (async () => {
      const response = await fetch('http://localhost:8080/api/v1/agents', {
        method: 'GET',
      });

      const agents = await response.json();
      setAgents(agents);
      setIsLoading(false);
    })();
  }

  function addAgent(name, agentPictureURL, phoneNumber, email) {
    var agentRequestDTO = {
      name: name,
      agentPictureURL: agentPictureURL,
      email: email,
      phoneNumber: phoneNumber

    };

    fetch('http://localhost:8080/api/v1/agents', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(agentRequestDTO),
    })
      .then(async (response) => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && (await response.json());

        if (!response.ok) {
          const error = (data && data.message) || response.status;
          console.log('put error occurred:', error);
          return Promise.reject(error);
        }

        if (response.status === 201) {
          successToast("Succesfully added an agent!")
        }

        getAllAgents();
      });

  }
  function updateAgent(updatedAgent) {
    console.log(updatedAgent)
    console.log("Agent is: " + updatedAgent.agent.agentId)

    var agentRequestDTO = {
      agentId: updatedAgent.agentId,
      name: updatedAgent.name,
      email: updatedAgent.email,
      phoneNumber: updatedAgent.phoneNumber,
      agentPictureURL: updatedAgent.agentPictureURL
    }


    fetch(`http://localhost:8080/api/v1/agents/${updatedAgent.agentId}`,
      {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(agentRequestDTO)
      })
      .then(async response => {
        const isJson = response.headers
          .get('content-type')?.includes('application/json');
        const data = isJson && await response.json();
        console.log("data is: " + data.agentPictureURL)

        if (!response.ok) {
          const error = (data && data.message) ||
            response.status;
          console.log("post error occured")
          return Promise.reject(error);
        }
        if (response.status === 200) {
          successToast("Succesfully modified an agent!")
        }

        getAllAgents();

      })
  }


  async function deleteAgentHandler(agentId) {
    const response = await fetch(`http://localhost:8080/api/v1/agents/${agentId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => {

        if (response.status === 422) {
          getAllAgents();
          errorToast("Delete unsuccessful!")
        }
        else {
          successToast("Delete successful!")
        }
      })
      .catch(function (error) {
        console.log("an unknown error occurred");
        return Promise.reject(error);
      });
    getAllAgents();

  }


  if (isLoading) {
    return <div><h1>Loading...</h1></div>;
  }

  return (
    <Container fluid>
      <AddAgent addAgent={addAgent} />
      <Row className="justify-content-evenly">
        {agents && agents.map((agent) => (
          <AgentCard
            key={agent.agentId}
            agent={agent}
            onDeleteAgentHandler={deleteAgentHandler}
            updateAgent={updateAgent}
          />
        ))}
      </Row>
    </Container>
  );
}
