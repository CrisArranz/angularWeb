import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})

export class ExperienceService {

  private dbPath = 'topics-experience';

  constructor(private firestore: AngularFirestore) { }

  getExperienceList() {
    return this.firestore.collection(this.dbPath).snapshotChanges();
  }

  getExperienceInfo(infoExperience: string) {
    return this.firestore.collection(infoExperience).snapshotChanges();
  }
}