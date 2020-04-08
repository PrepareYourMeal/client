import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import Icon from '@mdi/react';
import { mdiTimer, mdiAccount, mdiStar } from '@mdi/js';
import './recipeCard.scss';

export default function RecipeCard({ recipe }) {
    const { spoon_id: spoonId, imageUrl, title, servings, readyInMinutes } = recipe;

    const StarRating = () => [...Array(5).keys()].map(k => <Icon key={k} path={mdiStar} color="#FFC741" size={1} />);
    const ServingIcon = () => <Icon path={mdiAccount} color="#909090" size={1} title="Number of serving" />;
    const TimerIcon = () => <Icon path={mdiTimer} color="#909090" size={1} title="Timer for cooking" />;

    return (
        <Card className="recipe-card mb-4">
            <Link to={`/recipe/${spoonId}`}>
                <CardImg top width="100%" src={imageUrl} alt={`Recipe image ${spoonId}`} />
            </Link>
            <CardBody className="p-4 recipe-card-body">
                <Link to={`/recipe/${spoonId}`}>
                    <CardTitle className="mb-2 pb-2" tag="h3">
                        {title.length < 15 ? title : `${title.substring(0, 25)}...`}
                    </CardTitle>
                </Link>
                <CardText>
                    <StarRating />
                </CardText>
                <CardText className="recipe-card-text">
                    <ServingIcon />
                    {` ${servings} servings`}
                </CardText>
                <CardText className="recipe-card-text">
                    <TimerIcon />
                    {` ${readyInMinutes} min`}
                </CardText>
            </CardBody>
        </Card>
    );
}
RecipeCard.propTypes = {
    recipe: PropTypes.object,
};
