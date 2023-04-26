import { Component } from '@angular/core';
import { Developer } from '../model/developer.model';
import { Skill } from '../model/skill.model';

@Component({
  selector: 'app-developer-component',
  templateUrl: './developer-component.component.html',
  styleUrls: ['./developer-component.component.scss'],
})
export class DeveloperComponentComponent {
  developerList: Developer = new Developer(
    'mehdy',
    'Guettache',
    'male',
    'prout',
    25,
    [new Skill ('angular', 'https://cdn.pixabay.com/photo/2023/04/24/02/51/crimson-rosella-7947000_960_720.jpg','angular.com'), new Skill ('java', 'https://cdn.pixabay.com/photo/2022/10/06/13/17/monks-7502654_960_720.jpg','java.com')],
  );
}
