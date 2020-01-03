import {trigger, transition, style, query, group, animateChild, animate } from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          opacity: 0,
          transform: 'scale(0) translateY(100%)'
        })
      ]),
      query(':enter', [
        animate('60ms ease', 
            style({opacity: 1, transform: 'scale(1) translateY(0)'})
        )
      ]),
    ])
  ]);