import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from "../models/face-snap.model";
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent {
  @Input() facesnap!: FaceSnap;

  
  buttonText!: string;

constructor(private faceSnapsService: FaceSnapsService, private route: ActivatedRoute) { 
}

  ngOnInit() {
    const snapId = +this.route.snapshot.params['id'];
    this.buttonText = 'Oh Snap!';
    this.facesnap = this.faceSnapsService.getFaceSnapById(snapId);
  }
  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.facesnap.id, 'snap')
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.facesnap.id, 'unsnap')
      this.buttonText = 'Oh Snap!'
    }
  }
}
