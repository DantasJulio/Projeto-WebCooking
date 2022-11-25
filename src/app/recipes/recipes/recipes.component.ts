import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Recipe } from '../model/recipe';
import { RecipesService } from '../services/recipes.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes$: Observable<Recipe[]>;

  displayedColumns = ['chef', 'title', 'category'];

  constructor(
    private recipesService: RecipesService,
    public dialog: MatDialog
    ) {
      this.recipes$ = this.recipesService.findAll().pipe(
        catchError(error => {
          this.onError('Erro ao carregar cursos!');
          return of([])
        }
        )
      )
   }

   onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  ngOnInit(): void {

  }

}
