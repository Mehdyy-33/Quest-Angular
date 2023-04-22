import { Component } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css']
})
export class FaceSnapComponent {
  title: string;
  description: string;
  createdDate: Date;
  snaps: number;
}
