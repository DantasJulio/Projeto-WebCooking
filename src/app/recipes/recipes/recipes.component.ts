import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Recipe } from '../model/recipe';
import { RecipesService } from '../services/recipes.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {
  recipes: Observable<Recipe[]>;

  displayedColumns = ['chef', 'title', 'category'];

  constructor(private recipesService: RecipesService ) {
      this.recipes = this.recipesService.findAll();
   }

  ngOnInit(): void {

  }

}
