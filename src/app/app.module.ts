import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeveloperComponentComponent } from './developer-component/developer-component.component';
import { SkillComponentComponent } from './skill-component/skill-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DeveloperComponentComponent,
    SkillComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
