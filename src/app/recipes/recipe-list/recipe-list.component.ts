import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '.././recipe.model';
import { RecipeService } from '.././recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  //Creates a new instance of the Recipe model, data within the new Recipe(); is based on the Recipe model constructor
   recipes: Recipe[]

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //Listens for changes in the recipe service subject
    this.recipeService.recipesChanged
    .subscribe(
      (recipes: Recipe[]) =>{
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

 onNewRecipe(){
   this.router.navigate(['new'], {relativeTo: this.route});
 }


}
