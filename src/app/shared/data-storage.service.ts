import { Injectable } from '@angular/core'
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/RX';
import { Observable } from 'rxjs/Observable';
import { RecipeService } from '../recipes/recipe.service';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {

 constructor(private http: Http, private recipesService: RecipeService, private authService: AuthService){}

 // ADD / OVERIDE DATA IN FIREBASE
 storeRecipes() {
   const token = this.authService.getToken()
  return this.http.put('https://ng-recipe-book-a78ad.firebaseio.com/recipes.json?auth=' + token, this.recipesService.getRecipes());
 }

 //GET RECIPES
 getRecipes(){
   const token = this.authService.getToken()

  this.http.get('https://ng-recipe-book-a78ad.firebaseio.com/recipes.json?auth=' + token)
 .map(
   (response: Response) =>{
    const recipes: Recipe[] = response.json();
    for(let recipe of recipes){
      if(!recipe['ingredients']){
        console.log(recipe);
       recipe['ingredients'] = [];
      }
    }
    return recipes;
   }
 )
 .subscribe(
   (recipes: Recipe[] ) => {

     this.recipesService.setRecipes(recipes);
   }
 );
}


//Adding Auth / protected routes to the
//Auth routes via the token from firebase
}
