package com.ioannispanaritis.MyRealestate_Agents_Service.dataaccesslayer.Agent;

import com.ioannispanaritis.MyRealestate_Agents_Service.dataaccesslayer.Property.Property;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@Entity
@Table(name = "agents")
@Data
@NoArgsConstructor
public class Agent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "agentid")
    private String agentId;

    @Column(name = "name")
    private String name;

    @Column(name = "email")
    private String email;

    @Column(name = "phonenumber")
    private String phoneNumber;

    @Column(name = "agentpictureurl")
    private String agentPictureURL;

    @OneToMany(mappedBy = "agent")
    private Set<Property> properties;

}
