import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.recipeSelected
    .subscribe( //listenes to the Eventemiter from the recipe service
      (recipe: Recipe) => { //recipe is the data passed
        this.selectedRecipe = recipe; // assign the this.selectedRecipe
                                      //to the value from the recipe passed from the service
      });
  }

}
