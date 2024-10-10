package com.ioannispanaritis.MyRealestate_Agents_Service.businesslayer.AgentProperty;

import com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.AgentProperties.AgentPropertiesResponseDTO;

public interface AgentPropertiesService {
    AgentPropertiesResponseDTO getAllPropertiesByAgentId(String agentId);
}
