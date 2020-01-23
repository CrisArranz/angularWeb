import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { transformerAnimation } from './animations/router-animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    transformerAnimation
  ]
})
export class AppComponent {
  title = 'angularWeb';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
