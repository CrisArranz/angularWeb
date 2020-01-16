import { Component, OnInit } from '@angular/core';
import { KnowmeService } from '../../services/knowme.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {
  interestsList: any;
  constructor(private knowMeService: KnowmeService) { }

  ngOnInit() {
    this.getInterestsInfo();
  }

  getInterestsInfo = () =>
    this.knowMeService.getKnowMeInfo('interests')
    .subscribe(res => (this.interestsList = res));
}
