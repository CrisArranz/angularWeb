import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KnowMeComponent } from '../know-me/know-me.component';
import { ConcernsComponent } from '../know-me/concerns/concerns.component';
import { HobbiesComponent } from '../know-me/hobbies/hobbies.component';
import { InterestsComponent } from '../know-me/interests/interests.component';
import { KnowledgeComponent } from '../know-me/knowledge/knowledge.component';
import { LikesComponent } from '../know-me/likes/likes.component';

import { ExperienceComponent } from '../experience/experience.component';


import { ContactComponent } from '../contact/contact.component';

const appRoutes: Routes = [
  { path: 'knowme', component: KnowMeComponent, pathMatch: 'prefix', children: [
    { path: 'concerns', component: ConcernsComponent},
    { path: 'hobbies', component: HobbiesComponent },
    { path: 'interests', component: InterestsComponent },
    { path: 'knowledge', component: KnowledgeComponent },
    { path: 'likes', component: LikesComponent },
    { path: '', component: KnowledgeComponent }
  ]},
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  providers: [],
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
