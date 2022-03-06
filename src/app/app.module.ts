import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadormodule } from './contador/contador/contador.module';


import { heroemodule } from './heroes/heroes.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    heroemodule,
    contadormodule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
