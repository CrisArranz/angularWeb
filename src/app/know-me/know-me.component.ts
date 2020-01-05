import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-know-me',
  templateUrl: './know-me.component.html',
  styleUrls: ['./know-me.component.scss']
})
export class KnowMeComponent implements OnInit {

  currentLink = false;
  currentHref: string;
  sourceHref = '/knowme/';

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.currentHref = this.router.url.split(this.sourceHref)[1];
  }

  mark() {
    this.currentHref = this.router.url.split(this.sourceHref)[1];
  }

}
