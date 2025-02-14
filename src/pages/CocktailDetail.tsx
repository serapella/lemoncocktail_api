import { useParams } from "react-router-dom";
import useSWR from "swr";
import { CocktailDetail as CocktailDetailType } from "../types/cocktail";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const CocktailDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error, isLoading } = useSWR(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div className="loading">⌛</div>;
  if (!data) return null;

  const cocktail = data.drinks[0] as CocktailDetailType;
  const ingredients = Array.from({ length: 15 }, (_, i) => i + 1)
    .map((i) => ({
      ingredient: cocktail[`strIngredient${i}`],
      measure: cocktail[`strMeasure${i}`],
    }))
    .filter((item) => item.ingredient);

  return (
    <div className="detail-container">
      <div className="detail-card">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        <div className="content">
          <h1>{cocktail.strDrink}</h1>

          <h2>Ingredients:</h2>
          <ul>
            {ingredients.map(({ ingredient, measure }, index) => (
              <li key={index}>
                {measure} {ingredient}
              </li>
            ))}
          </ul>

          <h2>Instructions:</h2>
          <p>{cocktail.strInstructions}</p>

          <p className="meta">
            Glass: {cocktail.strGlass} | Category: {cocktail.strCategory}
          </p>
        </div>
      </div>
    </div>
  );
};
