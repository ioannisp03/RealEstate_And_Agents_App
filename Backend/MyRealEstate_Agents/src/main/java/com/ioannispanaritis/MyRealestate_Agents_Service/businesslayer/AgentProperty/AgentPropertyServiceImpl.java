package com.ioannispanaritis.MyRealestate_Agents_Service.businesslayer.AgentProperty;

import com.ioannispanaritis.MyRealestate_Agents_Service.Utils.Exceptions.NotFoundException;
import com.ioannispanaritis.MyRealestate_Agents_Service.dataaccesslayer.Agent.Agent;
import com.ioannispanaritis.MyRealestate_Agents_Service.dataaccesslayer.Agent.AgentRepository;
import com.ioannispanaritis.MyRealestate_Agents_Service.dataaccesslayer.Property.Property;
import com.ioannispanaritis.MyRealestate_Agents_Service.dataaccesslayer.Property.PropertyRepository;
import com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.AgentProperties.AgentPropertiesResponseDTO;
import com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.Agents.AgentResponseDTO;
import com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.Properties.PropertyResponseDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AgentPropertyServiceImpl implements AgentPropertiesService {

    private AgentRepository agentRepository;
    private PropertyRepository propertyRepository;

    public AgentPropertyServiceImpl(AgentRepository agentRepository, PropertyRepository propertyRepository) {
        this.agentRepository = agentRepository;
        this.propertyRepository = propertyRepository;
    }

    @Override
    public AgentPropertiesResponseDTO getAllPropertiesByAgentId(String agentId) {

        //find ID in database
        Agent foundAgent = agentRepository.findAgentsByAgentId(agentId);
        if (foundAgent == null) {
            throw new NotFoundException("Unknown agent: " + agentId);
        }
        AgentPropertiesResponseDTO agentPropertiesResponseDTO = new AgentPropertiesResponseDTO();
        BeanUtils.copyProperties(foundAgent, agentPropertiesResponseDTO);

        List<Property> propertyList = propertyRepository.findPropertiesByAgent_AgentId(agentId);
        List<PropertyResponseDTO> propertyResponseDTOList = new ArrayList<>();

        for(Property property : propertyList){
            PropertyResponseDTO propertyResponseDTO = new PropertyResponseDTO();
            BeanUtils.copyProperties(property,propertyResponseDTO);

            AgentResponseDTO agentResponseDTO = new AgentResponseDTO();
            BeanUtils.copyProperties(property.getAgent(),agentResponseDTO);
            propertyResponseDTO.setAgent(agentResponseDTO);
            propertyResponseDTOList.add(propertyResponseDTO);
        }
        agentPropertiesResponseDTO.setProperties(propertyResponseDTOList);
        return agentPropertiesResponseDTO;
    }
}
