import useSWR from "swr";
import { CocktailCard } from "../components/CocktailCard";
import { Cocktail } from "../types/cocktail";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const LemonCocktails = () => {
  const { data, error, isLoading } = useSWR(
    "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=lemon",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div className="loading">⌛</div>;
  if (!data) return null;

  return (
    <div className="container">
      <h1 className="page-title">Lemon Cocktails</h1>
      <div className="grid">
        {data.drinks.map((cocktail: Cocktail) => (
          <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </div>
    </div>
  );
};
