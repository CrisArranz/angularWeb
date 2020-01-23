import {trigger, transition, style, query, animate, animateChild, group } from '@angular/animations';

export const fadderAnimation =
  trigger ('routeAnimations', [
    transition('* <=> *' , fadderTo())]);

export const slideToAnimation =
  trigger ('routeAnimations', [
    transition('knowme <=> *' , slideTo('right')),
    transition('contact <=> *' , slideTo('left')),
    transition('* <=> knowme' , slideTo('left')),
    transition('* <=> contact' , slideTo('right')),
]);

export const transformerAnimation =
  trigger ('routeAnimations', [
    transition('knowme <=> *' , transformTo({ x: 100, y: -100, rotate: 720 })),
    transition('contact <=> *' , transformTo({ x: 100, y: -100, rotate: 720 })),
    transition('* <=> knowme' , transformTo({ x: -100, y: 100, rotate: 720 })),
    transition('* <=> contact' , transformTo({ x: -100, y: 100, rotate: 720 })),
]);

function fadderTo() {
  const optional = {optional: true};
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
        opacity: 0,
        transform: 'scale(0) translateY(100%)'
      })
    ], optional),
    query(':enter', [
      animate('600ms ease',
          style({ opacity: 1, transform: 'scale(1) translateY(0)' }))
      ], optional),
    query(':leave', animateChild(), optional),
    query(':enter', animateChild(), optional)
  ];
}

function slideTo(direction: any) {
  const optional = {optional: true};
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
        [direction]: 50
      })
    ], optional),
    query(':enter', [
        style({ [direction]: '-100%' })
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({[direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('600ms ease', style({[direction]: '0%'}))
      ], optional)
    ]),
    query(':leave', animateChild(), optional),
    query(':enter', animateChild(), optional),
  ];
}


function transformTo({x = 100, y = 0, rotate = 0}) {
  const optional = {optional: true};
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
        top: 0,
        left: 0
      })
    ], optional),
    query(':enter', [
      style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`})
    ]),
    group([
      query(':leave', [
        animate('1600ms ease-out', style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`}))
      ], optional),
      query(':enter', [
        animate('1600ms ease-out', style({ transform: `translate(0, 0) rotate(0)`}))
      ], optional)
    ]),
    query(':leave', animateChild(), optional),
    query(':enter', animateChild(), optional),
  ];
}
