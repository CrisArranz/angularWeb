import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';


import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { FooterToolbarComponent } from './footer-toolbar/footer-toolbar.component';
import { KnowMeComponent } from './know-me/know-me.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { KnowledgeComponent } from './know-me/knowledge/knowledge.component';
import { HobbiesComponent } from './know-me/hobbies/hobbies.component';
import { LikesComponent } from './know-me/likes/likes.component';
import { InterestsComponent } from './know-me/interests/interests.component';
import { ConcernsComponent } from './know-me/concerns/concerns.component';
import { PhpComponent } from './experience/php/php.component';
import { JavascriptComponent } from './experience/javascript/javascript.component';
import { WorkingComponent } from './experience/working/working.component';

@NgModule({
  declarations: [
    AppComponent,
    TopToolbarComponent,
    FooterToolbarComponent,
    KnowMeComponent,
    ExperienceComponent,
    ContactComponent,
    KnowledgeComponent,
    HobbiesComponent,
    LikesComponent,
    InterestsComponent,
    ConcernsComponent,
    PhpComponent,
    JavascriptComponent,
    WorkingComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
