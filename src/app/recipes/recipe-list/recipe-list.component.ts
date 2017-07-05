import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Recipe } from '.././recipe.model';
import { RecipeService } from '.././recipe.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit, OnDestroy {
  //Creates a new instance of the Recipe model, data within the new Recipe(); is based on the Recipe model constructor
   recipes: Recipe[]
   subscription: Subscription;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    //Listens for changes in the recipe service subject
    this.subscription = this.recipeService.recipesChanged
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

 //will destroy the subscription when the component is destroyed
 ngOnDestroy(){
  this.subscription.unsubscribe();
 }


}
