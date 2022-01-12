import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterfaziuComponent } from './interfaziu/interfaziu.component';

@NgModule({
  declarations: [
    AppComponent,
    InterfaziuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
