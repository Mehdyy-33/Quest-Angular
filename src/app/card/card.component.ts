import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
img: string = "/assets/téléchargement.png"
hello: string = "Hello John";
age: number = 25;
quote: string = "";
}
