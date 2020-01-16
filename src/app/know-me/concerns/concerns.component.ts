import { Component, OnInit } from '@angular/core';
import { KnowmeService } from '../../services/knowme.service';

@Component({
  selector: 'app-concerns',
  templateUrl: './concerns.component.html',
  styleUrls: ['./concerns.component.scss']
})
export class ConcernsComponent implements OnInit {
  concernsList: any;

  constructor(private knowMeService: KnowmeService) { }

  ngOnInit() {
    this.getConcernsList();
  }

  getConcernsList = () =>
  this.knowMeService
    .getKnowMeInfo('concerns')
    .subscribe(res => (this.concernsList = res));

}
