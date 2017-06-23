import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>() //listens for when the event changes
  startedEditing = new Subject<number>();
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
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients); //... is a JS6 spread method that allows pushing of an object
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}


//Have this service manage the shopping list
//List of ingredients and the add ingredient method
