DROP TABLE agents if exists;
CREATE TABLE agents (
                        id INT NOT NULL AUTO_INCREMENT,
                        agentid VARCHAR(36) NOT NULL UNIQUE,
                        name VARCHAR(255) NOT NULL,
                        email VARCHAR(255) NOT NULL,
                        phonenumber VARCHAR(255) NOT NULL,
                        agentpictureurl VARCHAR(255),
                        PRIMARY KEY (id)
);
DROP TABLE properties IF EXISTS;
CREATE TABLE properties (
                            id INT NOT NULL AUTO_INCREMENT,
                            propertyid VARCHAR(36) NOT NULL UNIQUE,
                            address VARCHAR(255) NOT NULL,
                            price INT NOT NULL,
                            bedroomcount INT NOT NULL,
                            bathroomcount INT NOT NULL,
                            imageurl VARCHAR(255),
                            agentid VARCHAR(36) NOT NULL,
                            PRIMARY KEY (id),
                            FOREIGN KEY (agentid) REFERENCES agents(agentid)
);