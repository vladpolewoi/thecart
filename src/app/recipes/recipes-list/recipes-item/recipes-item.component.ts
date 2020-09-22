import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {
  @Input() item: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit(): void {
  }

  onSelected(): void {
    this.recipesService.recipeSelected.emit(this.item);
  }
}
