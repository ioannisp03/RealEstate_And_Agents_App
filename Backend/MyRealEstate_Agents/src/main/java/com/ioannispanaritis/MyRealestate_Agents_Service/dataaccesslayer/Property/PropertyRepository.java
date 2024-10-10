package com.ioannispanaritis.MyRealestate_Agents_Service.dataaccesslayer.Property;


import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PropertyRepository extends JpaRepository<Property, Integer> {

    Property findPropertiesByPropertyId(String propertyId);

    List<Property> findPropertiesByAgent_AgentId(String agentId);


}
