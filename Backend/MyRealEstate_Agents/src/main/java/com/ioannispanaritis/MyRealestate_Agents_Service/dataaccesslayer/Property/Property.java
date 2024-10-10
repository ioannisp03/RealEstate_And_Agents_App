package com.ioannispanaritis.MyRealestate_Agents_Service.dataaccesslayer.Property;

import com.ioannispanaritis.MyRealestate_Agents_Service.dataaccesslayer.Agent.Agent;
import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@Table(name = "properties")
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    @Column(name = "propertyid")
    private String propertyId;

    @Column(name = "address")
    private String address;

    @Column(name = "price")
    private double price;

    @Column(name = "bedroomcount")
    private int bedroomCount;

    @Column(name = "Bathroomcount")
    private int bathroomCount;

    @Column(name = "imageurl")
    private String imageURL;

    @ManyToOne
    @JoinColumn(name = "agentid", referencedColumnName = "agentid")
    private Agent agent;
}
