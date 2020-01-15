import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations/router-animation';
import { KnowmeService } from '../services/knowme.service';
import { map } from 'rxjs/operators';

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

  knowMeList: any;

  constructor(public knowMeService: KnowmeService, private router: Router) {
  }

  ngOnInit() {
    this.getKnowMeList();
  }

  getKnowMeList = () =>
    this.knowMeService
      .getKnowMeList()
      .subscribe(res => (this.knowMeList = res));

  mark() {
    this.currentHref = this.router.url.split(this.sourceHref)[1];
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
