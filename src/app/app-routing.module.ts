import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  //Implement lazy loading
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}, //Lazy loads the recipe module with route/# and the module
  {path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
