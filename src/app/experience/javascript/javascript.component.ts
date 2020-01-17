import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent implements OnInit {
  javascriptList: any;

  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.getExperienceList();
  }

  getExperienceList = () =>
  this.experienceService
    .getExperienceInfo('javascript')
    .subscribe(res => (this.javascriptList = res));

}
