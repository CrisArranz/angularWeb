import { Component, OnInit } from '@angular/core';
import { KnowmeService } from '../../services/knowme.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  likesList: any;
  constructor(private knowMeService: KnowmeService) { }

  ngOnInit() {
    this.getLikesInfo();
  }

  getLikesInfo = () =>
    this.knowMeService.getKnowMeInfo('likes')
    .subscribe(res => (this.likesList = res));

}
