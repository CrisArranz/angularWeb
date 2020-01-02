import {trigger, transition, style, query, group, animateChild, animate, keyframes } from '@angular/animations';

export const fader = 
    trigger('routerAnimations', [
        transition('* <=> *',[
            query(':enter, :leave',[
                style({
                    opacity: 0
                })
            ]),
            query(':enter', [
                animate('600ms ease',
                style({ opacity: 1}))
            ])
        ])
    ])