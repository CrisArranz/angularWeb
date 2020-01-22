import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ExperienceService } from '../services/experience.service';
import { slideInAnimation } from '../animations/router-animation';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class ExperienceComponent implements OnInit {

  currentHref = 'php';
  sourceHref = '/experience/';

  experienceList: any;

  constructor(private experienceService: ExperienceService, private router: Router) { }

  ngOnInit() {
    this.getExperienceList();
  }

  mark(){
    this.currentHref = this.router.url.split(this.sourceHref)[1];
  }

  getExperienceList = () =>
    this.experienceService.getExperienceList()
    .subscribe(res => (this.experienceList = res));

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
