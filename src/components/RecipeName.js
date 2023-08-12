import React, { useState } from "react";
import "./RecipeName.css"; // 

const RecipeName = ({ onSearch }) => {
    const [recipeName, setRecipeName] = useState("");

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            if (recipeName.trim() !== "") {
                onSearch(recipeName);
                setRecipeName("");
            }
        }
    };

    const handleRecipeNameChange = (e) => {
        setRecipeName(e.target.value);
    };

    return (
        <div className="recipe-name-container">
            <input
                className="recipe-name-input"
                type="text"
                placeholder="Search for a Recipe"
                value={recipeName}
                onChange={handleRecipeNameChange}
                onKeyDown={handleKeyPress}
            />
        </div>
    );
};

export default RecipeName;
