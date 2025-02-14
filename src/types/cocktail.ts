export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export interface CocktailDetail extends Cocktail {
  strInstructions: string;
  strCategory: string;
  strGlass: string;
  [key: string]: string | null;
}