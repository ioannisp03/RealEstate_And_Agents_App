package com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.Properties;

import com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.Agents.AgentResponseDTO;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PropertyResponseDTO {
    private String propertyId;
    private String address;
    private  double price;
    private int bedroomCount;
    private int bathroomCount;
    private String imageURL;
    private AgentResponseDTO agent;




}
