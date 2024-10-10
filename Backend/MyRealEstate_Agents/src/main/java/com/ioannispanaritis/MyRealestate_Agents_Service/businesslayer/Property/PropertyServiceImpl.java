package com.ioannispanaritis.MyRealestate_Agents_Service.businesslayer.Property;

import com.ioannispanaritis.MyRealestate_Agents_Service.Utils.Exceptions.NotFoundException;
import com.ioannispanaritis.MyRealestate_Agents_Service.dataaccesslayer.Agent.Agent;
import com.ioannispanaritis.MyRealestate_Agents_Service.dataaccesslayer.Agent.AgentRepository;
import com.ioannispanaritis.MyRealestate_Agents_Service.dataaccesslayer.Property.Property;
import com.ioannispanaritis.MyRealestate_Agents_Service.dataaccesslayer.Property.PropertyRepository;
import com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.Agents.AgentResponseDTO;
import com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.Properties.PropertyRequestDTO;
import com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.Properties.PropertyResponseDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
@Service
public class PropertyServiceImpl implements PropertyService {
    private AgentRepository agentRepository;
    private PropertyRepository propertyRepository;

    public PropertyServiceImpl(AgentRepository agentRepository, PropertyRepository propertyRepository) {
        this.agentRepository = agentRepository;
        this.propertyRepository = propertyRepository;
    }


    @Override
    public List<PropertyResponseDTO> getAllProperties() {
        List<Property> propertyEntities = propertyRepository.findAll(); //finds all property entities from repository and puts them in the list
        List<PropertyResponseDTO> propertyResponseDTOList = new ArrayList<>(); //initialize empty list

        for (Property property : propertyEntities) { //for every property in the properties List...
            PropertyResponseDTO propertyResponseDTO = new PropertyResponseDTO();
            BeanUtils.copyProperties(property, propertyResponseDTO); //set parameters of the entities to the responseDTO

            AgentResponseDTO agentResponseDTO = new AgentResponseDTO();
            BeanUtils.copyProperties(property.getAgent(), agentResponseDTO); // copy properties from the property's agent to agentResponseDTO
            propertyResponseDTO.setAgent(agentResponseDTO);

            propertyResponseDTOList.add(propertyResponseDTO);

        }

        return propertyResponseDTOList;
    }

    @Override
    public PropertyResponseDTO getPropertyById(String propertyId) {
        Property foundProperty = propertyRepository.findPropertiesByPropertyId(propertyId); //find agent with its ID

        if (foundProperty == null) {
            throw new NotFoundException("Unkown propertyId:" + propertyId);
        }

        PropertyResponseDTO propertyResponseDTO = new PropertyResponseDTO();
        //convert savedProperty entity to a dto
        BeanUtils.copyProperties(foundProperty, propertyResponseDTO);

        AgentResponseDTO agentResponseDTO = new AgentResponseDTO();
        BeanUtils.copyProperties(foundProperty.getAgent(), agentResponseDTO);
        propertyResponseDTO.setAgent(agentResponseDTO);



        return propertyResponseDTO;
    }

    @Override
    public PropertyResponseDTO addProperty(PropertyRequestDTO propertyRequestDTO) {
        Agent agent = agentRepository.findAgentsByAgentId(propertyRequestDTO.getPropertyId());

        if (agent == null) {
            throw new NotFoundException("Unkown propertyId:" + propertyRequestDTO.getPropertyId());
        }

        //convert requestDTO to an entity
        Property property = new Property();
        BeanUtils.copyProperties(propertyRequestDTO, property);
        property.setPropertyId(UUID.randomUUID().toString());

        property.setAgent(agent); //add the agent

        Property savedProperty = propertyRepository.save(property);  //save property entity to the database using the repository


//    Convert the entity to a responseDTO
        PropertyResponseDTO propertyResponseDTO = new PropertyResponseDTO();
        BeanUtils.copyProperties(savedProperty,propertyResponseDTO);

        AgentResponseDTO agentResponseDTO = new AgentResponseDTO();
        BeanUtils.copyProperties(savedProperty.getAgent(), agentResponseDTO); //copy property info to the agentResponseDTO
        propertyResponseDTO.setAgent(agentResponseDTO); // set the agent to the propertyResonseDTO (links AgentResponseDTO info and PropertyResponseDTO together)

        return propertyResponseDTO;
    }

    @Override
    public PropertyResponseDTO updateProperty(PropertyRequestDTO propertyRequestDTO, String propertyId) {
        Property foundProperty = propertyRepository.findPropertiesByPropertyId(propertyId);

        if (foundProperty == null) {
            throw new NotFoundException("Unkown propertyId:" + propertyId);
        }
//        Convert propertyRequestDTO to an entity
        Property property = new Property();
        BeanUtils.copyProperties(propertyRequestDTO, property);
        property.setPropertyId(foundProperty.getPropertyId()); //assign property ID
        property.setId(foundProperty.getId()); //set databaseID

        Agent agent = agentRepository.findAgentsByAgentId(propertyRequestDTO.getAgentId());

        property.setAgent(agent);
        //save the property entity to the repository
        Property savedProperty = propertyRepository.save(property);

//        convert savedProperty entity to a PropertyResponseDTO
        PropertyResponseDTO propertyResponseDTO = new PropertyResponseDTO();
        BeanUtils.copyProperties(savedProperty,propertyResponseDTO);

        // save
        AgentResponseDTO agentResponseDTO = new AgentResponseDTO();
        BeanUtils.copyProperties(agent,agentResponseDTO);

        propertyResponseDTO.setAgent(agentResponseDTO);



        return propertyResponseDTO;
    }


    @Override
    public void deleteProperty(String propertyId) {
        Property foundProperty = propertyRepository.findPropertiesByPropertyId(propertyId);

        if (foundProperty == null) {
            throw new NotFoundException("Unkown propertyId:" + propertyId);
        }

        propertyRepository.delete(foundProperty);

    }
}
