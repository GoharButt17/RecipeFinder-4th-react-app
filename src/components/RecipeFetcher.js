import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './RecipeFetcher.css'; // Import your CSS file

const RecipeFetcher = ({ recipeName, onRecipesFetched }) => {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (recipeName) {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(recipeName)}`)
        .then((response) => {
          const fetchedRecipes = response.data.meals || [];

          if (fetchedRecipes.length === 0) {
            setErrorMessage("Oops, Sorry for the Inconvenience, But This Recipe Is Not Found :(");
          } else {
            setErrorMessage("");
          }

          onRecipesFetched(fetchedRecipes); // Send fetched recipes back to parent
        })
        .catch((error) => {
          console.error('Error fetching recipes:', error);
        });
    }
  }, [recipeName, onRecipesFetched]);

  return (
    <div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default RecipeFetcher;
