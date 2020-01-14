import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations/router-animation';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-know-me',
  templateUrl: './know-me.component.html',
  styleUrls: ['./know-me.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class KnowMeComponent implements OnInit {

  currentHref = 'knowledge';
  sourceHref = '/knowme/';

  list: any[];

  constructor(public firebaseService: FirebaseService, private router: Router) {
  }

  ngOnInit() {
    this.firebaseService.getKnowMe().subscribe(data => {
      this.list = data.map(e => {
        return {
          ...e.payload.doc.metadata
        };
      });
    });

    console.log(this.list);
  }

  mark() {
    this.currentHref = this.router.url.split(this.sourceHref)[1];
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
