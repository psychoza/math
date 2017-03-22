import { ProblemComponent } from './problem.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ProblemComponent', function () {
  let de: DebugElement;
  let comp: ProblemComponent;
  let fixture: ComponentFixture<ProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProblemComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have a number1', () => {
    expect(comp.number1).toBeDefined('number1 needs to be defined');
  });

  it('should have a number2', () => {
    expect(comp.number2).toBeDefined('number2 needs to be defined');
  });

  it('should have a sum', () => {
    expect(comp.sum).toBeDefined('sum needs to be defined');
    expect(comp.sum).toBe(comp.number1 + comp.number2, 'sum should be the sum of number1 and number2');
  });

  it('should have a wrongSum1', () => {
    expect(comp.wrongSum1).toBeDefined('wrongSum1 should be defined');
    expect(comp.wrongSum1).toBe(comp.sum - 1, 'wrongSum1 should be the sum minus 1');
  });

  it('should have a wrongSum2', () => {
    expect(comp.wrongSum2).toBeDefined('wrongSum2 should be defined');
    expect(comp.wrongSum2).toBe(comp.sum + 1, 'wrongSum1 should be the sum plus 1');
  });

  it('should have a generateProblem method', () => {
    expect(comp.generateProblem).toBeDefined('it should exist');    
  });

  it('should have a generateRandomNumber method', () => {
    expect(comp.generateRandomNumber).toBeDefined('it should exist');
    var result = comp.generateRandomNumber();
    expect(result).toBeGreaterThanOrEqual(0, 'it should not generate a number below 0');
    expect(result).toBeLessThanOrEqual(5, 'it should not generate a number greater than 5');
  });
});
