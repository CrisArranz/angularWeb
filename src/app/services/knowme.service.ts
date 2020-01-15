import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class KnowmeService {

  private dbPath = 'topics';

  constructor(private firestore: AngularFirestore) {
  }

  getKnowMeList() {
    return this.firestore.collection(this.dbPath).snapshotChanges();
  }
}
