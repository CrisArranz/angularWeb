import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConcernsComponent } from '../know-me/concerns/concerns.component';
import { HobbiesComponent } from '../know-me/hobbies/hobbies.component';
import { InterestsComponent } from '../know-me/interests/interests.component';
import { KnowledgeComponent } from '../know-me/knowledge/knowledge.component';
import { LikesComponent } from '../know-me/likes/likes.component';

const appRoutes: Routes = [
  { path: 'concerns', component: ConcernsComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'interests', component: InterestsComponent },
  { path: 'knowledge', component: KnowledgeComponent },
  { path: 'likes', component: LikesComponent }
];

@NgModule({
  providers: [],
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
