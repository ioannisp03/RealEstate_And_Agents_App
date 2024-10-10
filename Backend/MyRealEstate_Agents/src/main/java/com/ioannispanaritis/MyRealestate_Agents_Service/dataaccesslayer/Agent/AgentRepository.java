package com.ioannispanaritis.MyRealestate_Agents_Service.dataaccesslayer.Agent;


import com.ioannispanaritis.MyRealestate_Agents_Service.dataaccesslayer.Property.Property;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AgentRepository extends JpaRepository<Agent, Integer> {

    Agent findAgentsByAgentId(String agentId);

}
