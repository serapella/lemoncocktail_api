import React from "react";
import { useNavigate } from "react-router-dom";
import { Cocktail } from "../types/cocktail";
import { createSlug } from "../helpers";

interface Props {
  cocktail: Cocktail;
}

export const CocktailCard: React.FC<Props> = ({ cocktail }) => {
  const navigate = useNavigate();
  const slug = createSlug(cocktail.strDrink);

  return (
    <div
      className="card"
      onClick={() => navigate(`/${cocktail.idDrink}/${slug}`)}
      style={{ cursor: "pointer" }}
    >
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <div className="card-content">
        <h2 className="card-title">{cocktail.strDrink}</h2>
      </div>
    </div>
  );
};
