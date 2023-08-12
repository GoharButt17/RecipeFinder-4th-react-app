import React from "react";
import "./RecipeModal.css";

const RecipeModal = ({ recipe, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content show"> {/* Added the "show" class */}
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <h1>{recipe.strMeal}</h1>
        <span>{recipe.strCategory}</span>
        <span>{recipe.strArea}</span>
        <h3>Instructions:</h3>
        <p>{recipe.strInstructions}</p>
        <h3>Ingredients:</h3>
        <ul>
          {Object.keys(recipe)
            .filter((key) => key.startsWith("strIngredient") && recipe[key])
            .map((key) => (
              <li key={key}>{recipe[key]}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeModal;
