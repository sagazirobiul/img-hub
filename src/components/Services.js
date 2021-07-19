import React from 'react';
import { Card, Button, Row, Container, Col, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imgData from '../data/imgData.json'

const Services = () => {
    
    return (
        <section id="services" className="pt-4 pb-5">
            <Container>
                <Col md={4} className="mx-auto">
                    <InputGroup className="mb-3 my-3">
                        <FormControl
                        aria-describedby="basic-addon2"
                        />
                        <Button variant="primary" id="button-addon2">
                        Search
                        </Button>
                    </InputGroup>
                </Col>
                <Row>
                {
                    imgData.map(({id, img}) => {
                        return(
                            <Col sm={6} md={4} key={id} className="mt-4">
                                <Card style={{ width: '18rem' }} className="shadow text-center mx-auto">
                                    <Card.Img variant="top" src={img} />
                                    <Card.Body>
                                        <Card.Title>Title {id}</Card.Title>
                                        <Card.Text>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
                                        </Card.Text>
                                        <Button as={Link} to={`/service/${id}`} variant="primary">View Details</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })
                }
                </Row>
            </Container>
        </section>
    );
};

export default Services;