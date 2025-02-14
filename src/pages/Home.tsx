import useSWR from "swr";
import { CocktailCard } from "../components/CocktailCard";
import { Cocktail } from "../types/cocktail";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const Home = () => {
  const { data, error, isLoading } = useSWR(
    "https://www.thecocktaildb.com/api/json/v1/1/random.php",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div className="loading">⌛</div>;
  if (!data) return null;

  const randomCocktail = data.drinks[0] as Cocktail;

  return (
    <div className="container">
      <h1 className="page-title">Random Cocktail</h1>
      <div className="random-cocktail">
        <CocktailCard cocktail={randomCocktail} />
      </div>
    </div>
  );
};
