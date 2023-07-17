import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Meals = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => setData(res.data.meals));
  }, []);

  return (
    <div>
      {data.map((meal) => (
        <Card meal={meal} key={meal.idMeal} />
      ))}
    </div>
  );
};

export default Meals;
