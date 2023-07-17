import React from "react";
import Meals from "../components/Meals";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Meals />
    </div>
  );
};

export default Home;
