import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [{
        id: 1,
        title: 'Archibald',
        description:'Mon meilleur ami depuis tout petit !',
        createdDate: new Date(),
       snaps: 0,
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        localisation:"bord",
      }, 
  
      {
        id: 2,
        title: 'Archibald',
        description:'Mon meilleur ami depuis tout petit !',
        createdDate: new Date(),
       snaps: 0,
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        localisation:"paris",
      }, 
  
      {
        id: 3,
        title: 'Archibald',
        description:'Mon meilleur ami depuis tout petit !',
        createdDate: new Date(),
       snaps: 0,
        imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        localisation:"alger",
      },]

      getAllFaceSnaps(): FaceSnap[]{
       return this.faceSnaps;
      }

      getFaceSnapById(faceSnapId: number): FaceSnap{
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if(!faceSnap){
          throw new Error ('error');
        }
        else{
        return faceSnap;        
      }
      }

      snapFaceSnapById(faceSnapId: number,  snapType: 'snap' | 'unsnap'): void{
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }

}