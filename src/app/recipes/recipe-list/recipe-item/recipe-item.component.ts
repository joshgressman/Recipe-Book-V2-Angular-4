import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ShoppingListService } from '../../../shopping-list/shopping-list.service';
import { Ingredient } from '../../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
   @Input() recipe: Recipe;

     //@Input is used to get data from outside the component, your INPUTTING DATA by binding outside the component

  constructor(private recipeService: RecipeService, private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

 onSelected(){
  this.recipeService.recipeSelected.emit(this.recipe);
  // this.shoppingListService.addIngredient();
 }

}
