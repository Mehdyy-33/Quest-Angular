import { Component } from '@angular/core';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-login-form-component',
  templateUrl: './login-form-component.component.html',
  styleUrls: ['./login-form-component.component.scss']
})
export class LoginFormComponentComponent {

  model: Order = new Order("","");

  constructor() { }

  onSubmit(): void {
    console.log(this.model);
  }
}
