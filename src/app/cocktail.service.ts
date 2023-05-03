import { Injectable } from '@angular/core';
import { Cocktail } from './model/cocktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  cocktail:Cocktail[]=[
    new Cocktail("mojito",5,"Pas d'image"),
    new Cocktail("panacota",6,"Pas d'image"),
    new Cocktail("tequila",7,"Pas d'image"),

  ]

public getCocktails(){
  return this.cocktail;
}
}
