import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipesService {
  recipes: Recipe[] = [
    new Recipe(
      'Recipe 1',
      'this is test',
      'https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-Recipe.jpg',
      [
        new Ingredient('meat', 2),
        new Ingredient('potato', 20),
      ],
    ),
    new Recipe(
      'Recipe 2',
      'this is test',
      'https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-Recipe.jpg',
      [
        new Ingredient('meat', 2),
        new Ingredient('potato', 20),
      ],
    ),
    new Recipe(
      'Recipe 3',
      'this is test',
      'https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-Recipe.jpg',
      [
        new Ingredient('meat', 2),
        new Ingredient('potato', 20),
      ],
    ),
    new Recipe(
      'Recipe 4',
      'this is test',
      'https://pinchofyum.com/wp-content/uploads/Moroccan-Chickpea-Bowls-Recipe.jpg',
      [
        new Ingredient('meat', 2),
        new Ingredient('potato', 20),
      ],
    ),
  ];

  getRecipes(): Recipe[] {
    return [...this.recipes];
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
}
