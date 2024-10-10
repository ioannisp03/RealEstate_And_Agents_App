package com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.Agents;

import com.ioannispanaritis.MyRealestate_Agents_Service.businesslayer.Agent.AgentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins= "http://localhost:3000")

@RestController
@RequestMapping("/api/v1/agents")
public class AgentController {
    private AgentService agentService;

    //Constructor
    public AgentController(AgentService agentService) {
        this.agentService = agentService;
    }


    @GetMapping()
    public ResponseEntity<List<AgentResponseDTO>> getAllAgents() {
        return ResponseEntity.status(HttpStatus.OK).body(agentService.getAllAgents());
    }

    @GetMapping("/{agentId}")
    public ResponseEntity<AgentResponseDTO> getAgent(@PathVariable String agentId) {
        return ResponseEntity.status(HttpStatus.OK).body(agentService.getAgentById(agentId));
    }

    @PostMapping()
    public ResponseEntity<AgentResponseDTO> addAgent(@RequestBody AgentRequestDTO agentRequestDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(agentService.addAgent(agentRequestDTO));
    }

    @PutMapping("/{agentId}")
    public ResponseEntity<AgentResponseDTO> updateAgent(@RequestBody AgentRequestDTO agentRequestDTO,
                                                        @PathVariable String agentId) {
        return ResponseEntity.status(HttpStatus.OK).body(agentService.updateAgent(agentRequestDTO, agentId));
    }

    @DeleteMapping("/{agentId}")
    public ResponseEntity<Void> deleteAgent(@PathVariable String agentId) {
        agentService.deleteAgent(agentId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
    }

}
