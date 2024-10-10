package com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.AgentProperties;

import com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.Properties.PropertyResponseDTO;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
public class AgentPropertiesResponseDTO {
    private String agentId;
    private String name;
    private String email;
    private String phoneNumber;
    private String agentPictureURL;
    private List<PropertyResponseDTO> properties;

}
