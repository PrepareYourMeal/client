import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardText, CardTitle, CardHeader, CardFooter, CardSubtitle } from 'reactstrap';
import './recipeCard.scss';

export default function RecipeCard({ recipe }) {
    const { spoon_id: spoonId, imageUrl, title, servings, readyInMinutes } = recipe;
    return (
        <Card className="recipe-card mb-4">
            <Link to={`/recipe/${spoonId}`}>
                <CardImg top width="100%" src={imageUrl} alt={`Recipe image ${spoonId}`} />
            </Link>
            <CardBody className="p-4 recipe-card-body">
                <Link to={`/recipe/${spoonId}`}>
                    <CardTitle tag="h3">{title.length < 15 ? title : `${title.substring(0, 25)}...`}</CardTitle>
                </Link>
                <CardText>{`${servings} servings`}</CardText>
                <CardText>{`${readyInMinutes} min`}</CardText>
            </CardBody>
        </Card>
    );
}
RecipeCard.propTypes = {
    recipe: PropTypes.object,
};
