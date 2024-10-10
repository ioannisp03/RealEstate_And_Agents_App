package com.ioannispanaritis.MyRealestate_Agents_Service.businesslayer.Agent;

import com.ioannispanaritis.MyRealestate_Agents_Service.dataaccesslayer.Agent.Agent;
import com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.Agents.AgentRequestDTO;
import com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.Agents.AgentResponseDTO;

import java.util.List;

public interface AgentService {

    AgentResponseDTO getAgentById(String agentId);

    List<AgentResponseDTO> getAllAgents();

    AgentResponseDTO addAgent(AgentRequestDTO agentsRequestDTO);

    AgentResponseDTO updateAgent(AgentRequestDTO agentsRequestDTO, String agentId);

    void deleteAgent(String agentId);

}
