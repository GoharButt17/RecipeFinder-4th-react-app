import React, { useState } from "react";
import RecipeModal from "./RecipeModal";
import "./RecipeDetails.css"; 

const RecipeDetails = ({ recipes }) => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    const openModal = (recipe) => {
        setSelectedRecipe(recipe);
    };

    const closeModal = () => {
        setSelectedRecipe(null);
    };
    return (
        <div className="recipe-container">
            {recipes.map((recipe) => (
                <div key={recipe.idMeal} className="recipe-card" onClick={() => openModal(recipe)}>
                    <div className="recipe-image">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    </div>
                    <div className="recipe-content">
                        <h1 className="recipe-title">{recipe.strMeal}</h1>
                        <div className="recipe-meta">
                            <span className="recipe-category">{recipe.strCategory}</span>
                            <span className="recipe-area">{recipe.strArea}</span>
                        </div>
                        <h3 className="recipe-heading">Instructions:</h3>
                        <p className="recipe-instructions">{recipe.strInstructions}</p>
                        <h3 className="recipe-heading">Ingredients:</h3>
                        <ul className="recipe-ingredients">
                            {Object.keys(recipe)
                            .filter((key) => key.startsWith("strIngredient") && recipe[key])
                            .map((key) => (
                                <li key={key}>{recipe[key]}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
            {selectedRecipe && <RecipeModal recipe={selectedRecipe} onClose={closeModal} />}
        </div>
    );
};

export default RecipeDetails;
