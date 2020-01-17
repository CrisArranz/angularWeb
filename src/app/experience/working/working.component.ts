import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-working',
  templateUrl: './working.component.html',
  styleUrls: ['./working.component.scss']
})
export class WorkingComponent implements OnInit {
  workingList: any;
  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.getWorkingList();
  } 

  getWorkingList = () =>
    this.experienceService.getExperienceInfo('laboral')
    .subscribe(res => (this.workingList = res));
}
