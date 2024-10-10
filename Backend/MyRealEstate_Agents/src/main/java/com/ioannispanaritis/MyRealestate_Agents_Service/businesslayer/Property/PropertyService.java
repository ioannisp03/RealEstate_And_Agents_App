package com.ioannispanaritis.MyRealestate_Agents_Service.businesslayer.Property;

import com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.Properties.PropertyRequestDTO;
import com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.Properties.PropertyResponseDTO;

import java.util.List;

public interface PropertyService {

    List<PropertyResponseDTO> getAllProperties();

    PropertyResponseDTO getPropertyById(String propertyId);

    PropertyResponseDTO addProperty(PropertyRequestDTO propertyRequestDTO);

    PropertyResponseDTO updateProperty(PropertyRequestDTO propertyRequestDTO, String propertyId);

    void deleteProperty(String propertyId);
}
