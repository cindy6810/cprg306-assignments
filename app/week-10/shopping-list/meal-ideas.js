"use client";
import React, { useEffect, useState } from "react";

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  // Function to fetch meal ideas from TheMealDB API
  async function fetchMealIdeas(ingredient) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  }

  // Load meal ideas whenever the ingredient changes
  function loadMealIdeas() {
    fetchMealIdeas(ingredient).then(setMeals);
  }

  useEffect(() => {
    if (ingredient) loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas for "{ingredient}"</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              style={{ width: "50px" }}
            />
            <span>{meal.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MealIdeas;
