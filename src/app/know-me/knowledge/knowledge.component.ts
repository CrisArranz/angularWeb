import { Component, OnInit } from '@angular/core';
import { KnowmeService } from '../../services/knowme.service';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {
knowledgeList: any;
  constructor(private knowMeService: KnowmeService) { }

  ngOnInit() {
    this.getKnowledgeInfo();
  }

  getKnowledgeInfo = () =>
    this.knowMeService.getKnowMeInfo('knowledge')
    .subscribe(res => (this.knowledgeList = res));

}
