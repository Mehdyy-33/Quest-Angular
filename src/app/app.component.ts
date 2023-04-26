import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'myFirstApp';

  onomatopoeiaList:string[] = [];
  onomatopoeia: string = "";

  constructor() {}

  ngOnInit() {}

  onReceiveNewOnomatopia(event: string): void{
   this.onomatopoeia = event;
   this.onomatopoeiaList.push(this.onomatopoeia)
  }
}
