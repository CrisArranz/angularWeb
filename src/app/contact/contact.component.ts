import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadderAnimation } from '../animations/router-animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    fadderAnimation
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
