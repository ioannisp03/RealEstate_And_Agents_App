package com.ioannispanaritis.MyRealestate_Agents_Service.businesslayer.Agent;

import com.ioannispanaritis.MyRealestate_Agents_Service.Utils.Exceptions.InUseException;
import com.ioannispanaritis.MyRealestate_Agents_Service.Utils.Exceptions.NotFoundException;
import com.ioannispanaritis.MyRealestate_Agents_Service.dataaccesslayer.Agent.Agent;
import com.ioannispanaritis.MyRealestate_Agents_Service.dataaccesslayer.Agent.AgentRepository;
import com.ioannispanaritis.MyRealestate_Agents_Service.dataaccesslayer.Property.Property;
import com.ioannispanaritis.MyRealestate_Agents_Service.dataaccesslayer.Property.PropertyRepository;
import com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.Agents.AgentRequestDTO;
import com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.Agents.AgentResponseDTO;
import com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.Properties.PropertyResponseDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class AgentServiceImpl implements AgentService {

    private AgentRepository agentRepository;


    public AgentServiceImpl(AgentRepository agentRepository) {
        this.agentRepository = agentRepository;
    }

    @Override
    public AgentResponseDTO getAgentById(String agentId) {
        Agent foundAgent = agentRepository.findAgentsByAgentId(agentId); //go to the rep and find agent by ID
        if (foundAgent == null) {
            throw new NotFoundException("Unknown agent id " + agentId);
        }

        //convert agent entity to a responseDTO, so we can show the user what we want them to see.

        AgentResponseDTO agentResponseDTO = new AgentResponseDTO(); //create the agentResponseDTO that the user will see (we will return it)
        BeanUtils.copyProperties(foundAgent, agentResponseDTO);

        return agentResponseDTO;
    }

    @Override
    public List<AgentResponseDTO> getAllAgents() {

        List<Agent> agentEntities = agentRepository.findAll(); //finds all agent entities from repository
        List<AgentResponseDTO> agentResponseDTOList = new ArrayList<>(); //initialize empty arraylist that will store AgentResponceDTO objects

//        Go through each agent entity in the list
        for (Agent agent : agentEntities) {
            AgentResponseDTO agentResponseDTO = new AgentResponseDTO(); //create a agentResponseDTO for the current agent
            BeanUtils.copyProperties(agent, agentResponseDTO); //store the current agent's properties(id,name etc) into the responseDTO

            agentResponseDTOList.add(agentResponseDTO); //add the info to the DTO list

        }

        return agentResponseDTOList;
    }

    @Override
    public AgentResponseDTO addAgent(AgentRequestDTO agentRequestDTO) {

        Agent agent = new Agent(); //add a new agent
        BeanUtils.copyProperties(agentRequestDTO, agent); //copy properties of what user inputted to the new agent
        agent.setAgentId(UUID.randomUUID().toString()); //create  a unique ID for the agent that is created

        //save the newly created Agent to the repository
        Agent savedAgent = agentRepository.save(agent);

        //convert the savedAgent entity to a responseDTO

        AgentResponseDTO agentResponseDTO = new AgentResponseDTO(); //create responseDTO for the new agent
        BeanUtils.copyProperties(savedAgent, agentResponseDTO); // copy the properties of the agent to the agentResponseDTO

        return agentResponseDTO;
    }

    @Override
    public AgentResponseDTO updateAgent(AgentRequestDTO agentRequestDTO, String agentId) {
        Agent foundAgent = agentRepository.findAgentsByAgentId(agentId); // Find the agent entity that needs to be updated

        if (foundAgent == null) {
            throw new NotFoundException("Unknown agent Id: " + agentId);
        }

        // Update the properties of the foundAgent with those from agentRequestDTO
        BeanUtils.copyProperties(agentRequestDTO, foundAgent);

        // Save the newly updated Agent to the repository
        Agent savedAgent = agentRepository.save(foundAgent);

        // Convert the entity to a responseDTO
        AgentResponseDTO agentResponseDTO = new AgentResponseDTO();
        BeanUtils.copyProperties(savedAgent, agentResponseDTO);

        return agentResponseDTO;
    }

    @Override
    public void deleteAgent(String agentId) {
        Agent foundAgent = agentRepository.findAgentsByAgentId(agentId);
        if (foundAgent == null) {
            throw new NotFoundException("Unknown agent id: " + agentId);

        }
        try {
            agentRepository.delete(foundAgent);
        } catch (DataIntegrityViolationException ex) {
            throw new InUseException("Cannot delete agent with agent Id: " + agentId + " since they have properties listed.");
        }
    }
}



