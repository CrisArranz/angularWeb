import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from '../animations/router-animation';

@Component({
  selector: 'app-know-me',
  templateUrl: './know-me.component.html',
  styleUrls: ['./know-me.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class KnowMeComponent implements OnInit {

  currentHref = 'knowledge';
  sourceHref = '/knowme/';

  /*
    Quiero dejar estos elementos dentro de una API para cuando me mueva por el routing usando el propio elemento del routing hacer la llamada para recoger la inforamcion
    contents = {
      knowledge: { title: 'Estudios', description: 'Grado Superior D.A.I. (Desarrollo de Aplicaciones Informáticas) Programación informática, aplicaciones específicas.', lugar: 'I.E.S Enrique Tierno Galván. Parla. Madrid' },
      likes: { title: 'Gustos', description: 'Me gusta disfrutar de mi trabajo. Soy competitivo pero también me encanta el juego en equipo, compartir y aprender de los que me rodean.' },
      concerns: { title: 'Inquietudes', description: 'Me considero una persona curiosa, con grandes ganas de aprender y con el conocimiento de que puedo mejorar muchísimo.\r\nAmante del trabajo en equipo y todas las metodologías que apoyan este punto.\r\nMe encantan los retos y abordarlos de la mejor manera posible tanto individualmente como colectivamente.\r\nDisfruto del trabajo cada día para regresar con las mismas ganas al día siguiente.' },
      hobbies: { title: 'Aficiones', description: 'Amante del baloncesto desde pequeño, eso me ha llevado a ser entrenador del mismo.\r\nMe encantan los rompecabezas y todos los juegos que conlleven usar el cerebro.' },
      interests: { title: 'Intereses', description: 'Me interesa seguir creciendo en este mundo laboral de la informática, seguir aprendiendo y no dejarme vencer por los problemas que encuentre en el camino.\r\nAprender, disfrutar y ayudar a mi equipo de trabajo para alcanzar nuestra metas.' }
    };
  */

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  mark() {
    this.currentHref = this.router.url.split(this.sourceHref)[1];
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
