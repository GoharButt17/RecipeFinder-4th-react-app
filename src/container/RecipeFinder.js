import React, { useState } from "react";
import RecipeName from "../components/RecipeName";
import RecipeDetails from "../components/RecipeDetails";
import RecipeFetcher from "../components/RecipeFetcher";
import './RecipeFinder.css';

const RecipeFinder = () => {
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);

    const handleRecipeName = (name) => {
        setSearch(name);
    };

    const handleRecipesFetched = (fetchedRecipes) => {
        setRecipes(fetchedRecipes);
    };

    return (
        <div>
            <h1>Recipe Finder</h1>
            <RecipeName onSearch={handleRecipeName} />
            <RecipeFetcher recipeName={search} onRecipesFetched={handleRecipesFetched} />
            <RecipeDetails recipes={recipes} />
        </div>
    );
};

export default RecipeFinder;
