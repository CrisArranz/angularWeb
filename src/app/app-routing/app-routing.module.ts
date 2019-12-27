import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KnowMeComponent } from '../know-me/know-me.component';

const appRoutes: Routes = [
  { path: 'knowme', component: KnowMeComponent }
];

@NgModule({
  providers: [],
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
