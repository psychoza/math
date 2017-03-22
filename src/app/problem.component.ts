import { Component } from '@angular/core';

@Component({
  selector: 'problem',
  template: `<h1>Hello {{name}}</h1>`,
})
export class ProblemComponent  {   
  number1: number;
  number2: number;
  sum: number;
  wrongSum1: number;
  wrongSum2: number;

  generateProblem = function() {
    this.number1 = this.generateRandomNumber();
    this.number2 = this.generateRandomNumber();
    this.sum = this.number1 + this.number2;
    this.wrongSum1 = this.sum - 1;
    this.wrongSum2 = this.sum + 1;
  };

  generateRandomNumber = function() {
    return Math.floor(Math.random() * 6);
  };

  constructor(){
    this.generateProblem();
  };
}