import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent {
  user :User = new User ("GUETTACHE","Mehdy",25,"","https://randomuser.me/api/portraits/lego/2.jpg")
  isButtonVisible = true;
}

class User {
  name : string;
  firstName : string;
  age : number;
  quote : string;
  photo : string;

  constructor (name : string,
    firstName : string,
    age : number,
    quote : string,
    photo : string,){
  this.name = name;
  this.firstName = firstName;
  this.age = age;
  this.quote = quote;
  this.photo = photo;
    };
};

