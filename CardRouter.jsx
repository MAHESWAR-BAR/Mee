import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const CardRouter = () => {
  return (
    <div>
      <Card />
      <Link to={"/page"} />
    </div>
  );
};

export default CardRouter;
