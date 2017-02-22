import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProblemComponent }  from './problem.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ProblemComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
