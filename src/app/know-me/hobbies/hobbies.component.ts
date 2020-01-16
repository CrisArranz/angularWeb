import { Component, OnInit } from '@angular/core';
import { KnowmeService } from '../../services/knowme.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  hobbiesList: any;
  constructor(private knowMeService: KnowmeService) { }

  ngOnInit() {
    this.getHobbiesInfo();
  }

  getHobbiesInfo = () =>
    this.knowMeService.getKnowMeInfo('hobbies')
    .subscribe(res => (this.hobbiesList = res));

}
