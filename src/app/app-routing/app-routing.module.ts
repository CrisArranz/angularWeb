import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { KnowMeComponent } from '../know-me/know-me.component';
import { ConcernsComponent } from '../know-me/concerns/concerns.component';
import { HobbiesComponent } from '../know-me/hobbies/hobbies.component';
import { InterestsComponent } from '../know-me/interests/interests.component';
import { KnowledgeComponent } from '../know-me/knowledge/knowledge.component';
import { LikesComponent } from '../know-me/likes/likes.component';

import { ExperienceComponent } from '../experience/experience.component';
import { PhpComponent } from '../experience/php/php.component';
import { JavascriptComponent } from '../experience/javascript/javascript.component';
import { WorkingComponent } from '../experience/working/working.component';

import { ContactComponent } from '../contact/contact.component';
import { InfoComponent } from '../contact/info/info.component';

const appRoutes: Routes = [
  { path: 'knowme', component: KnowMeComponent, data: {animation: 'knowme'}, pathMatch: 'prefix', children: [
    { path: 'concerns', component: ConcernsComponent, data: {animation: 'concerns'}},
    { path: 'hobbies', component: HobbiesComponent, data: {animation: 'hobbies'} },
    { path: 'interests', component: InterestsComponent, data: {animation: 'interests'} },
    { path: 'knowledge', component: KnowledgeComponent, data: {animation: 'knowledge'} },
    { path: 'likes', component: LikesComponent, data: {animation: 'likes'} },
    { path: '', component: KnowledgeComponent }
  ]},
  { path: 'experience', component: ExperienceComponent, data: {animation: 'experience'}, pathMatch: 'prefix', children: [
    { path: 'php', component: PhpComponent, data: {animation: 'php'}},
    { path: 'javascript', component: JavascriptComponent, data: {animation: 'javascript'} },
    { path: 'working', component: WorkingComponent, data: {animation: 'working'} },
    { path: '', component: PhpComponent, data: {animation: 'php'} }
  ] },
  { path: 'contact', component: ContactComponent, data: {animation: 'contact'}, pathMatch: 'prefix', children: [
    { path: '', component: InfoComponent, data: {animation: 'info'}}
  ] },
  { path: '**', component: ContactComponent, pathMatch: 'full', children: [
    { path: '', component: InfoComponent, data: {animation: 'info'}}
  ]}
];

@NgModule({
  providers: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
