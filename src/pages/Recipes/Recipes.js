import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    CardDeck,
    Collapse,
    CardHeader,
    CardFooter,
    CardSubtitle,
    Button,
} from 'reactstrap';

export default function Recipe() {
    //     // this.state = {
    //     //     user: {},
    //     //     query: '',
    //     //     message: '',
    //     //     allRecipes: [],
    //     //     pageOfItems: [],
    //     //     isAuthenticated: false
    //     // };

    //     this.onChangePage = this.onChangePage.bind(this);
    //     this.handleOnInputChange = this.handleOnInputChange.bind(this);

    return (
        <Container>
            <div className="row">
                <div className="col">
                    <div className="page-title-box">
                        <h1 className="page-title">My Recipes</h1>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        name="query"
                        value={''}
                        id="search-input"
                        placeholder="Search..."
                        onChange={() => {}}
                    />
                </div>
            </div>

            <div className="isotope">
                <div className="row">
                    {[].map((recipe, index) => (
                        <div className="col-3">
                            <div className="card">
                                <div className="thumbnail-holder">
                                    <Link to={{ pathname: `/recipe/?spoon_id=${recipe.spoon_id}`, state: { recipe } }}>
                                        <img src={recipe.imageUrl} alt="" />
                                        <div className="hover-cover" />
                                        <div className="hover-icon">View Recipe</div>
                                    </Link>
                                </div>

                                <div className="recipe-box-content">
                                    <h3>
                                        <Link to={{ pathname: `/recipe/?spoon_id=${recipe.spoon_id}`, state: { recipe } }}>
                                            {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...`}
                                        </Link>
                                    </h3>

                                    <div className="rating five-stars">
                                        <div className="star-rating" />
                                        <div className="star-bg" />
                                    </div>

                                    <div className="recipe-meta">
                                        <i className="fa fa-user" />
                                        {recipe.servings} servings
                                    </div>
                                    <div className="recipe-meta">
                                        <i className="fa fa-clock-o" />
                                        {recipe.readyInMinutes} min
                                    </div>

                                    <div className="margin-bottom-40" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
}
