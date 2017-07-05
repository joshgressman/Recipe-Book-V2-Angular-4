import { Injectable } from '@angular/core'
import { Http } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class DataStorageService {

 constructor(private http: Http, private recipesService: RecipeService){}

 // ADD / OVERIDE DATA IN FIREBASE
 storeRecipes() {
  return this.http.put('https://ng-recipe-book-a78ad.firebaseio.com/recipes.json', this.recipesService.getRecipes());
 }

}
