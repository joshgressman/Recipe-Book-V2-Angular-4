import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

//Injects the shopping list service
@Injectable()

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Casarole', 'This is tasty Casarole', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/7/25/2/FNM_090112-Weeknight-Lasagna-Dinner-Recipe_s4x3.jpg.rend.hgtvcom.966.725.jpeg',[new Ingredient('Meat', 2)]),
    new Recipe('Chicken', 'This is tasty Chicken', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg', [new Ingredient('Noodle', 2)])

  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice(); //.slice will return a direct copy of the array
  }

  getRecipe(id: number){
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe){
   this.recipes[index] = newRecipe;
       this.recipesChanged.next(this.recipes.slice());
  }

}
