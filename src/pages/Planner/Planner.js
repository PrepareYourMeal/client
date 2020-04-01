import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    CardDeck,
    Container,
    Collapse,
    CardHeader,
    CardFooter,
    CardSubtitle,
    Button,
    ListGroup,
    ListGroupItem,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';

export default function Planner() {
    // this.state = {
    //     user: {},
    //     monday: [],
    //     tuesday: [],
    //     wednesday: [],
    //     thursday: [],
    //     friday: [],
    //     saturday: [],
    //     sunday: [],
    //     grocery: []
    // };

    //     removeSunday(rec_id) {
    //     let token = window.localStorage.getItem('accessJWT');
    //     const url = `/api/users/${token}/planner/sunday/${rec_id}`;
    //     axios.delete(url, { withCredentials: true })
    //     .then(r => {
    //         let sunday = this.state.sunday;
    //         const removeIndex = sunday.map(item => item.spoon_id).indexOf(rec_id);
    //         sunday.splice(removeIndex, 1);
    //         this.setState({ sunday: sunday });
    //         console.log(r.status);
    //         console.log(this.state.sunday)
    //     })
    //     .catch(e => console.log(e))
    // }

    // getGrocery() {
    //     let token = window.localStorage.getItem('accessJWT');
    //     const url = `/api/users/${token}/planner/grocery`;
    //     axios.get(url, { withCredentials: true })
    //     .then(response => response.data)
    //     .then((data) => {
    //         console.log(data)
    //         this.setState({ grocery: data })
    //         console.log(this.state.grocery)
    //     })

    // }

    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <div className="page-title-box">
                        <h3 className="page-title">Planner</h3>
                    </div>
                </Col>
            </Row>

            <h4>Monday</h4>
            <Row className="bg-picture card-box">
                <CardDeck>
                    {[].map(recipe => (
                        <Col>
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
                </CardDeck>
            </Row>

            <h4>Tuesday</h4>
            <Row className="bg-picture card-box">
                <CardDeck>
                    {[].map(recipe => (
                        <Col>
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
                </CardDeck>
            </Row>

            <h4>Wednesday</h4>
            <Row className="bg-picture card-box">
                <CardDeck>
                    {[].map(recipe => (
                        <Col>
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
                </CardDeck>
            </Row>

            <h4>Thursday</h4>
            <Row className="bg-picture card-box">
                <CardDeck>
                    {[].map(recipe => (
                        <Col>
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
                </CardDeck>
            </Row>

            <h4>Friday</h4>
            <Row className="bg-picture card-box">
                <CardDeck>
                    {[].map(recipe => (
                        <Col>
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
                </CardDeck>
            </Row>

            <h4>Saturday</h4>
            <Row className="bg-picture card-box">
                <CardDeck>
                    {[].map(recipe => (
                        <Col>
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
                </CardDeck>
            </Row>

            <h4>Sunday</h4>
            <Row className="bg-picture card-box">
                <CardDeck>
                    {[].map(recipe => (
                        <Col>
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
                </CardDeck>
            </Row>
        </Container>
    );
}
