import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TesteComponent } from '../components/teste/teste.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  {path: '', component: RecipesComponent},
  {path: 'teste', component: TesteComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
