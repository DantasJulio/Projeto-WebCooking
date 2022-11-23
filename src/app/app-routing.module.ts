import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes/recipes.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'recipes'},
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then((m) => m.RecipesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
