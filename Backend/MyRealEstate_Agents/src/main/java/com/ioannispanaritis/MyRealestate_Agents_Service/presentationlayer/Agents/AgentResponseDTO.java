package com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.Agents;

import com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.Properties.PropertyResponseDTO;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class AgentResponseDTO {
    private String agentId;
    private String name;
    private String email;
    private String phoneNumber;
    private String agentPictureURL;


}
