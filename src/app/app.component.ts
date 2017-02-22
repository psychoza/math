import { Component } from '@angular/core';
import { ProblemComponent } from './problem.component';

@Component({
  selector: 'math',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { 
  name = 'Jesse';
  score = 1;
}