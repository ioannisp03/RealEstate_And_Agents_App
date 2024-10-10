package com.ioannispanaritis.MyRealestate_Agents_Service.presentationlayer.Properties;


import com.ioannispanaritis.MyRealestate_Agents_Service.businesslayer.Property.PropertyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins= "http://localhost:3000")

@RestController
@RequestMapping("/api/v1/properties")
public class PropertyController {
    private PropertyService propertyService;

    public PropertyController(PropertyService propertyService) {
        this.propertyService = propertyService;
    }

    @GetMapping()
    public ResponseEntity<List<PropertyResponseDTO>> getAllProperties() {
        return ResponseEntity.status(HttpStatus.OK).body(propertyService.getAllProperties());
    }

    @GetMapping("/{propertyId}")
    public ResponseEntity<PropertyResponseDTO> getProperty(@PathVariable String propertyId) {
        return ResponseEntity.status(HttpStatus.OK).body(propertyService.getPropertyById(propertyId));
    }

    @PutMapping("/{propertyId}")
    public ResponseEntity<PropertyResponseDTO> updateProperty(@RequestBody PropertyRequestDTO propertyRequestDTO,
                                                              @PathVariable String propertyId) {
        return ResponseEntity.status(HttpStatus.OK).body(propertyService.updateProperty(propertyRequestDTO, propertyId));
    }

    @PostMapping
    public ResponseEntity<PropertyResponseDTO> addProperty(@RequestBody PropertyRequestDTO propertyRequestDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(propertyService.addProperty(propertyRequestDTO));
    }

    @DeleteMapping("/{propertyId}")
    public ResponseEntity<Void> deleteProperty(@PathVariable String propertyId) {
        propertyService.deleteProperty(propertyId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);

    }
}
