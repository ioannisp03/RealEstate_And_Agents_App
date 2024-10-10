package com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.Properties;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PropertyRequestDTO {
    private String propertyId;
    private String agentId;
    private String address;
    private  double price;
    private int bedroomCount;
    private int bathroomCount;
    private String imageURL;
}
