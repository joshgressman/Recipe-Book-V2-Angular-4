import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
   @Input() recipe: Recipe;
     //@Input is used to get data from outside the component, your INPUTTING DATA by binding outside the component
   @Output() recipeSelected = new EventEmitter<void>();
   //@output listens to event from outside of the component
  constructor() { }

  ngOnInit() {
  }

 onSelected(){
   this.recipeSelected.emit();
 }

}
