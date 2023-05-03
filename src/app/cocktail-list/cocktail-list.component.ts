import { Component } from '@angular/core';
import { Cocktail } from '../model/cocktail.model';
import { CocktailService } from '../cocktail.service';


@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent {
  
  cocktails: Cocktail[] = []

  constructor(public CocktailService: CocktailService) { }

  getCocktails(): void {
    this.cocktails = this.CocktailService.getCocktails();
  }

  ngOnInit(): void {
    this.getCocktails();
  }
}
