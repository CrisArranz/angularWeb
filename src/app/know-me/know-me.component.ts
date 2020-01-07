import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations/router-animation';

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

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  mark() {
    this.currentHref = this.router.url.split(this.sourceHref)[1];
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
