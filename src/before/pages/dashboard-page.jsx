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
import Icon from '@mdi/react';
import { mdiPrinter } from '@mdi/js';


export default function DefaultDashboard() {
    // state = {
    //     user: {},
    //     inventory: [],
    //     favourites: [],
    //     grocery: [],
    // };

    // removeIngredient(ingi_id) {}

    // removeFavourite(rec_id) { }

    const PrinterIcon = () => <Icon path={mdiPrinter} size={1} color="#FFFFFF" />;

    return (
        <Container>
            <Row>
                <Col>
                    <div className="page-title-box">
                        <h4 className="page-title">Profile</h4>
                    </div>
                    <Card className="border-0 mb-5" body>
                        <CardTitle tag="h3">Whats in my Fridge?</CardTitle>
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
                    <Card className="border-0 mb-5" body>
                        <CardTitle tag="h3">Grocery List</CardTitle>
                        <Button type="button" onClick={() => window.print()}>
                            <PrinterIcon /> Print
                        </Button>
                        <ListGroup flush>
                            {[].map(ingredient => (
                                <ListGroupItem key={ingredient.name}>
                                    <strong>{ingredient.name}</strong>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </Card>
                </Col>
                <Col>
                    <div className="page-title-box">
                        <h4 className="page-title">My Favourites</h4>
                    </div>
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
