import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'test',
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
}
