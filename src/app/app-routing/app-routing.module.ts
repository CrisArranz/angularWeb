import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KnowMeComponent } from '../know-me/know-me.component';
import { ConcernsComponent } from '../know-me/concerns/concerns.component';
import { HobbiesComponent } from '../know-me/hobbies/hobbies.component';
import { InterestsComponent } from '../know-me/interests/interests.component';
import { KnowledgeComponent } from '../know-me/knowledge/knowledge.component';
import { LikesComponent } from '../know-me/likes/likes.component';

const appRoutes: Routes = [
  { path: '', component: KnowMeComponent, children: [
      { path: 'knowme/concerns', component: ConcernsComponent},
      { path: 'knowme/hobbies', component: HobbiesComponent },
      { path: 'knowme/interests', component: InterestsComponent },
      { path: 'knowme/knowledge', component: KnowledgeComponent },
      { path: 'knowme/likes', component: LikesComponent }
    ]
  }
  
];

@NgModule({
  providers: [],
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
