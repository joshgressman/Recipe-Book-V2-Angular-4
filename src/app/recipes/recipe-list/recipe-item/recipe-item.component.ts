import { Component, OnInit, Input} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
   @Input() recipe: Recipe;
     //@Input is used to get data from outside the component, your INPUTTING DATA by binding outside the component

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

 onSelected(){
  this.recipeService.recipeSelected.emit(this.recipe);
  //event emitter from the recipe service
 }

}
