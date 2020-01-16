import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class KnowmeService {

  private dbPath = 'topics-knowme';

  constructor(private firestore: AngularFirestore) {
  }

  getKnowMeList() {
    return this.firestore.collection(this.dbPath).snapshotChanges();
  }

  getKnowMeInfo(infoKnowMe: string) {
    return this.firestore.collection(infoKnowMe).snapshotChanges();
  }
}
