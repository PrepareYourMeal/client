import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Input } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRecipes } from '@frontend/redux/actions';
import RecipeCard from './RecipeCard';

export default function Recipe() {
    const recipes = useSelector(state => state.recipes);
    const dispatch = useDispatch();
    const [searchBarValue, setSearchBarValue] = useState('');
    const [localRecipes, updateLocalRecipes] = useState(recipes);

    useEffect(() => {
        dispatch(fetchRecipes());
    }, []);

    useEffect(() => {
        updateLocalRecipes(recipes);
    }, [recipes]);

    useEffect(() => {
        if (searchBarValue) {
            const kwGroup = searchBarValue.toLowerCase().split(' ');
            const filteredRecipes = recipes.filter(r => kwGroup.some(kw => r.title.toLowerCase().includes(kw)));
            updateLocalRecipes(filteredRecipes);
        } else if (localRecipes.length !== recipes.length) {
            updateLocalRecipes(recipes);
        }
    }, [searchBarValue]);

    return (
        <Container>
            <Row className="mb-5">
                <Col>
                    <div className="page-title-box">
                        <h1 className="page-title">My Recipes</h1>
                    </div>
                    <Input
                        id="recipes-search-bar"
                        type="text"
                        onChange={e => setSearchBarValue(e.target.value)}
                        value={searchBarValue}
                        placeholder="Search the recipe you want..."
                        bsSize="lg"
                        className="recipes-serach-bar"
                    />
                </Col>
            </Row>

            <Row>
                {localRecipes.map(recipe => (
                    <Col xs="12" md="6" lg="3" key={recipe.spoon_id}>
                        <RecipeCard recipe={recipe} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
