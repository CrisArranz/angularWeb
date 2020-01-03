import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


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
    ConcernsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
