import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { FooterToolbarComponent } from './footer-toolbar/footer-toolbar.component';
import { KnowMeComponent } from './know-me/know-me.component';

@NgModule({
  declarations: [
    AppComponent,
    TopToolbarComponent,
    FooterToolbarComponent,
    KnowMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
