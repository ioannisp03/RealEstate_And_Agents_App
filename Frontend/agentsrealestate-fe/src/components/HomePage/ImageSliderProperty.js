import React from 'react';
import Slider from 'react-bootstrap/Carousel';
import { Container, Row, Col, Alert, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import property1 from '../Images/property1.avif';
import property2 from '../Images/property2.avif';
import property3 from '../Images/property3.avif';
import property4 from '../Images/property4.avif';
import property5 from '../Images/property5.avif';
import property6 from '../Images/property6.jpeg';
import property7 from '../Images/property7.jpeg';
import property8 from '../Images/prroperty8.jpeg';
import property9 from '../Images/property9.jpeg';
import property10 from '../Images/property10.jpeg';


const propertyImports = [property1, property2, property3, property4, property5, property6, property7, property8, property9, property10];

function ImageSlider() {
    return (
        <Container className='my-5'>
            <Slider className='mx-auto d-block'>
                {propertyImports.map((property, index) => (
                    <Slider.Item key={index} interval={3000} className="text-center">
                        <img
                            src={property}
                            alt={`Image ${index + 1}`}
                            width="850rem"
                            height="500rem"
                        />
                        <Slider.Caption>
                            <Container>
                                <Row>
                                    <Col>
                                        <Link to="/properties">
                                            <Alert variant="dark" className="text-center">
                                                <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                                                    Click to start viewing properties!
                                                </p>
                                            </Alert>
                                        </Link>
                                    </Col>
                                </Row>
                            </Container>
                        </Slider.Caption>
                    </Slider.Item>
                ))}
            </Slider>
        </Container>
    );
}

export default ImageSlider;
