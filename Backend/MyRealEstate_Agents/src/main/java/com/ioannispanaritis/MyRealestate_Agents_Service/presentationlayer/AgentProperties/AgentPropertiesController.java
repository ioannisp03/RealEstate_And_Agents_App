package com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.AgentProperties;

import com.ioannispanaritis.MyRealestate_Agents_Service.businesslayer.AgentProperty.AgentPropertiesService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins= "http://localhost:3000")

@RestController
@RequestMapping("/api/v1/agents/{agentId}/properties")
public class AgentPropertiesController {
    private AgentPropertiesService agentPropertiesService;

    public AgentPropertiesController(AgentPropertiesService agentPropertiesService) {
        this.agentPropertiesService = agentPropertiesService;
    }

    @GetMapping()
    public ResponseEntity<AgentPropertiesResponseDTO> getAllPropertiesByAgent(@PathVariable String agentId) {
        return ResponseEntity.status(HttpStatus.OK).body(agentPropertiesService.getAllPropertiesByAgentId(agentId));
    }

}
