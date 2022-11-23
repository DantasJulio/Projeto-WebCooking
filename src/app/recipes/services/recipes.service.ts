import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
  private readonly API = '/assets/receitas.json';

  constructor(private httpClient: HttpClient) { }

  findAll() {
    return  this.httpClient.get<Recipe[]>(this.API);
  }
}
