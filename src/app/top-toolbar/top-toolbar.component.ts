import { Component, OnInit } from '@angular/core';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.scss']
})
export class TopToolbarComponent implements OnInit {

  constructor(private animateScrollService: NgAnimateScrollService) { }

  ngOnInit() {
  }

  navigateTo(element: string, duration?: number) {
    this.animateScrollService.scrollToElement(element, duration);
  }

}
