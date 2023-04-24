import { Component } from '@angular/core';
import { Order } from '../model/order.model';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  model: Order = new Order("","","");

  constructor() { }

  onSubmit(): void {
    console.log(this.model);
  }
}
