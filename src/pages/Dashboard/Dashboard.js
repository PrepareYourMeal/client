import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    CardTitle,
    Button,
    UncontrolledCollapse,
    ListGroup,
    ListGroupItem,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardDeck,
} from 'reactstrap';

export default function DefaultDashboard() {
    // state = {
    //     user: {},
    //     inventory: [],
    //     favourites: [],
    //     grocery: [],
    // };

    // removeIngredient(ingi_id) {}

    // removeFavourite(rec_id) { }

    return (
        <Container>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <h4 className="page-title">Profile</h4>
                    </div>
                </Col>
                <Col>
                    <div className="page-title-box">
                        <h4 className="page-title">My Favourites</h4>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Row>
                        <Button id="toggler" style={{ marginBottom: '1rem', float: 'right' }}>
                            User Info
                        </Button>
                        <UncontrolledCollapse toggler="#toggler">
                            <Card>
                                <CardBody>
                                    <h3>User Name</h3>
                                    <CardImg
                                        src={'https://via.placeholder.com/200'}
                                        style={{ width: 200, height: 200, borderRadius: 150 / 2, overflow: 'hidden', borderWidth: 3 }}
                                    />
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                    </Row>
                    <Row>
                        <Card body>
                            <CardTitle>
                                <h3>Whats in my Fridge?</h3>
                            </CardTitle>
                            <ListGroup flush>
                                {[].map(ingredient => (
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
                        </Card>
                    </Row>
                    <Row>
                        <Card body>
                            <CardTitle>
                                <h3>Grocery List</h3>
                            </CardTitle>
                            <button type="button" onClick={() => window.print()} className="print">
                                <i className="fa fa-print" /> Print
                            </button>
                            <div className="clearfix" />
                            <ListGroup flush>
                                {[].map(ingredient => (
                                    <ListGroupItem key={ingredient.name}>
                                        <strong>{ingredient.name}</strong>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        </Card>
                    </Row>
                </Col>
                <Col>
                    <Row>
                        {[].map(recipe => (
                            <Col lg={4}>
                                <Card key={recipe.spoon_id}>
                                    <CardImg top width="100%" src={recipe.imageUrl} />
                                    <CardBody>
                                        <CardTitle>
                                            <h4>
                                                <Link to={{ pathname: `/recipe/?spoon_id=${recipe.spoon_id}`, state: { recipe } }}>
                                                    {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...`}
                                                </Link>
                                            </h4>
                                        </CardTitle>
                                        <span style={{ float: 'right' }}>
                                            <Button size="sm" onClick={() => {}}>
                                                <i className="fa fa-trash-alt" />
                                            </Button>
                                        </span>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
