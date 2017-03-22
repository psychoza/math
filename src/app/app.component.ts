import { Component } from '@angular/core';
import { ProblemComponent } from './problem.component';

@Component({
  selector: 'math',
  template: `
  <div class=container>
    <div class=row>
      <div class=col-sm-12>
        <h1>Hello {{name}}</h1>
      </div>
    </div>
    <div class=row>
      <div class=col-sm-3>
        <h2>{{currentProblem.number1}} + {{currentProblem.number2}} = </h2>
      </div>
      <div class=col-sm-3>
        <input type=button value={{currentProblem.sum}}/>
      </div>
      <div class=col-sm-3>
        <input type=button value={{currentProblem.wrongSum1}}/>
      </div>
      <div class=col-sm-3>
        <input type=button value={{currentProblem.wrongSum2}} (click)=currentProblem.generateProblem()/>
      </div>
    </div>
  </div>
  `,
})
export class AppComponent  { 
  name = 'Tristan';
  score = 0;
  currentProblem = new ProblemComponent();
}