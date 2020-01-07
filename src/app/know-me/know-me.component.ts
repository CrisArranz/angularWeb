import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-know-me',
  templateUrl: './know-me.component.html',
  styleUrls: ['./know-me.component.scss']
})
export class KnowMeComponent implements OnInit {

  currentLink = false;
  currentHref = 'knowledge';
  sourceHref = '/knowme/';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  mark() {
    this.currentHref = this.router.url.split(this.sourceHref)[1];
  }

}
