import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { sliderAnimation } from './animations/router-animation';
import { NgAnimateScrollService } from 'ng-animate-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    sliderAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'angularWeb';

  position: number;
  element = window.document;

  constructor(private animateScrollService: NgAnimateScrollService) {}

  async ngOnInit(){
    await this.delay(2000);
    this.navigateTo('navigateTo', 1500);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  delay(ms: number){
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  async navigateTo(element: string, duration?: number) {
    document.getElementById('hList').classList.remove('hidden');
    await this.animateScrollService.scrollToElement(element, duration);
    document.getElementById('hList').classList.add('visible');
  }


  scrollToElement (elementID: string, duration: number) {
    this.position = document.getElementById(elementID).offsetTop;
    if (this.position) {
      this.scrollTo (duration);
    } else {
      console.error (`Could not find element with the following ID: ${elementID}`);
    }
  }

  private scrollTo(duration: number) {
    const increment = 20;
    const start = this.calculateStart ();
    const currentTime = 0;
    let remaining: any;

    remaining = this.position - start;

    this.animateScroll (currentTime, start, remaining, duration, increment);
  }

  private animateScroll(currentTime, start, remaining, duration, increment) {
    currentTime += increment;
    const val = this.easeInOut(currentTime, start, remaining, duration);
    top.window.scroll (0, val);

    if (currentTime < duration) {
      setTimeout ( this.animateScroll , increment);
    }
  }

  private calculateStart() {
    if (this.element.body.scrollTop > 0) {
      return this.element.body.scrollTop;
    } else if (this.element.documentElement.scrollTop > 0) {
      return this.element.documentElement.scrollTop;
    }
    return 0;
  }

  private easeInOut(currentTime: number, startTime: number, remainingTime: number, duration: number) {
    currentTime /= duration / 2;

    if (currentTime < 1) {
      return (remainingTime / 2) * currentTime * currentTime + startTime;
    }

    currentTime--;
    return ((-remainingTime / 2) * (currentTime * (currentTime - 2) - 1) + startTime);
  }

}
