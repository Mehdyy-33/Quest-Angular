import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen',
  templateUrl: './app-kitchen.component.html',
  styleUrls: ['./app-kitchen.component.scss']
})
export class AppKitchenComponent implements OnInit  {

  flourQuantity: number = 0;
  saltQuantity: number = 0;
  sugarQuantity: number = 0;
  eggQuantity: number = 0;
  numberOfCookies: number = 0;
  cook: boolean = false;
  isCooked: boolean = false;

  startCooking() {
    this.isCooked = true;
  }
  ngOnInit(): void {
    
  }
}
