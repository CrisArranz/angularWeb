import {trigger, transition, style, query, animate, animateChild, group, keyframes } from '@angular/animations';

export const fadderAnimation =
  trigger ('routeAnimations', [
    transition('* <=> *' , fadderTo())
]);

export const stepperAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', stepperTo())

]);

export const sliderAnimation =
  trigger ('routeAnimations', [
    transition('knowme => *' , slideTo('right')),
    transition('contact => *' , slideTo('left')),
    transition('* => knowme' , slideTo('left')),
    transition('* => contact' , slideTo('right')),
]);

export const sliderChildAnimation =
  trigger ('routeAnimations', [
    transition('likes => *' , slideTo('right')),
    transition('* => likes' , slideTo('left')),
    transition('knowledge => interests' , slideTo('right')),
    transition('knowledge => concerns' , slideTo('right')),
    transition('interests => knowledge' , slideTo('left')),
    transition('interests => concerns' , slideTo('right')),
    transition('concerns => knowledge' , slideTo('left')),
    transition('concerns => interests' , slideTo('left')),
    transition('hobbies => *' , slideTo('left')),
    transition('* => hobbies' , slideTo('right')),
    transition('php => *' , slideTo('right')),
    transition('* => php' , slideTo('left')),
    transition('working => *' , slideTo('left')),
    transition('* => working' , slideTo('right')),
]);

export const transformerAnimation =
  trigger ('routeAnimations', [
    transition('knowme => *' , transformTo({ x: 100, y: -100, rotate: 720 })),
    transition('contact => *' , transformTo({ x: 100, y: -100, rotate: 720 })),
    transition('* => knowme' , transformTo({ x: -100, y: 100, rotate: 720 })),
    transition('* => contact' , transformTo({ x: -100, y: 100, rotate: 720 })),
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
        animate('600ms ease-out', style({ transform: `translate(${x}%, ${y}%) rotate(${rotate}deg)`}))
      ], optional),
      query(':enter', [
        animate('600ms ease-out', style({ transform: `translate(0, 0) rotate(0)`}))
      ], optional)
    ]),
    query(':leave', animateChild(), optional),
    query(':enter', animateChild(), optional),
  ];
}

function stepperTo(){
  const optional = {optional: true};
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        width: '100%',
      }),
    ], optional),
    group([
      query(':enter', [
        animate('2000ms ease', keyframes([
          style({ transform: 'scale(0) translateX(100%)', offset: 0 }),
          style({ transform: 'scale(0.5) translateX(25%)', offset: 0.3 }),
          style({ transform: 'scale(1) translateX(0%)', offset: 1 }),
        ])),
      ], optional),
      query(':leave', [
        animate('2000ms ease', keyframes([
          style({ transform: 'scale(1)', offset: 0 }),
          style({ transform: 'scale(0.5) translateX(-25%) rotate(0)', offset: 0.35 }),
          style({ opacity: 0, transform: 'translateX(-50%) rotate(-180deg) scale(6)', offset: 1 }),
        ])),
      ], optional)
    ])
  ];
}
