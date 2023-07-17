import React from "react";
import Meals from "../components/Meals";

const Home = () => {
  return (
    <div className="home">
      <h1>Cooking App</h1>
      <input type="text" placeholder="Tapez le nom d'un aliment (en anglais)" />
      <Meals />
    </div>
  );
};

export default Home;
