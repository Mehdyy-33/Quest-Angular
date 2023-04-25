import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMagicOvenComponent } from './app-magic-oven/app-magic-oven.component';
import { AppKitchenComponent } from './app-kitchen/app-kitchen.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMagicOvenComponent,
    AppKitchenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
