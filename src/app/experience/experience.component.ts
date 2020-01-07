import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  currentHref = 'php';
  sourceHref = '/experience/';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  mark(){
    this.currentHref = this.router.url.split(this.sourceHref)[1];
  }

}
