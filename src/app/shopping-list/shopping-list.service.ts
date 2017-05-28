import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>() //listens for when the event changes
  private ingredients: Ingredient[] = [                 //this is how the sliced() array copy gets updated
    new Ingredient('Chickern', 5),
    new Ingredient('olive oil', 1),
    new Ingredient('Greeen Pepper', 5)

  ];

  getIngredients(){
    return this.ingredients.slice(); //.slice will return a direct copy of the array
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients); //... is a JS6 spread method that allows pushing of an object
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}


//Have this service manage the shopping list
//List of ingredients and the add ingredient method
