import React from "react";

const Cards = ({ meal }) => {
  return (
    <div className="card">
      <h2>{meal.strMeal}</h2>
      <p>Origine: {meal.strArea}</p>
      <img src={meal.strMealThumb} alt={"photo de " + meal.strMeal} />
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default Cards;
