import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Meals = () => {
  const [data, setData] = useState([]);
  const [ingredientToFilter, setIngredientToFilter] = useState("");

  const filterIngredient = (meal, ingredient) => {
    for (let i = 1; i <= 20; i++) {
      const ingredientField = `strIngredient${i}`;
      if (
        meal[ingredientField] &&
        meal[ingredientField].toLowerCase().includes(ingredient.toLowerCase())
      ) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => setData(res.data.meals));
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Tapez le nom d'un aliment (en anglais)"
        onChange={(e) => setIngredientToFilter(e.target.value)}
      />
      <div className="meals">
        {data
          .filter((meal) => filterIngredient(meal, ingredientToFilter))
          .map((meal) => (
            <Card meal={meal} key={meal.idMeal} />
          ))}
      </div>
    </div>
  );
};

export default Meals;
