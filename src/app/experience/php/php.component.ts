import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../services/experience.service';

@Component({ 
  selector: 'app-php',
  templateUrl: './php.component.html',
  styleUrls: ['./php.component.scss']
})
export class PhpComponent implements OnInit {
  phpList: any;
  constructor(private experienceService: ExperienceService) { }

  ngOnInit() {
    this.getphpInfo();
  }

  getphpInfo = () =>
    this.experienceService.getExperienceInfo('php')
    .subscribe(res => (this.phpList = res));

}
