import React from 'react';
import { Row, Container, Col, Card, CardBody, CardTitle, Button, ListGroup, ListGroupItem, Input } from 'reactstrap';

export default function Ingredients() {
    //     this.state = {
    //         user: {},
    //         ingredients: [],
    //         isAuthenticated: false,
    //         inventory: [],
    //         filtered: [],
    //         search: ''
    //     };
    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col>
                            <div className="page-title-box">
                                <h4 className="page-title">Ingredient Box</h4>
                            </div>
                        </Col>
                        {/* <Col>
                                    <div className="page-title-box">
                                        <input type="text" className="input" onChange={(e) => this.updateSearch(e)} value={this.state.search} placeholder="Search..." />
                                    </div>
                                </Col> */}
                    </Row>
                    <Row>
                        <Input type="text" className="input" onChange={e => {}} value={''} placeholder="Search..." />
                        <div className="container">
                            <ListGroup flush>
                                {[].map((ingredient, index) => (
                                    <ListGroupItem>
                                        <strong>{ingredient.name}</strong>
                                        <Button size="sm" onClick={() => {}}>
                                            <i className="fa fa-plus" />
                                        </Button>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </div>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <div className="page-title-box">
                            <h4 className="page-title">My Fridge</h4>
                        </div>
                    </Row>
                    <ListGroup flush>
                        {[].map((ingredient, index) => (
                            <ListGroupItem>
                                <strong>{ingredient.name}</strong>
                                <span style={{ float: 'right' }}>
                                    <Button size="sm" onClick={() => {}}>
                                        <i className="fa fa-trash-alt" />
                                    </Button>
                                </span>
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}
