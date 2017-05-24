import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  ingredients: Ingredient[] = [
    new Ingredient('Chickern', 5),
    new Ingredient('olive oil', 1),
    new Ingredient('Greeen Pepper', 5)

  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }


}
