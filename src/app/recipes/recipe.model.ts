import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  ingredients: Ingredient[];

  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    ingredients: Ingredient[],
  ) {
    this.ingredients = ingredients;
  }
}
