import { AppComponent } from './app.component';
import { ProblemComponent } from './problem.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('h1'));
  });

  it('should create component', () => expect(comp).toBeDefined() );

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    const h1 = de.nativeElement;
    expect(h1.innerText).toMatch(/tristan/i);//,'<h1> should say something about "Jesse"');
  });

  it('should have a score', () => {
    expect(comp.score).toBeDefined('score needs to be defined');
  });

  it('should have a currentProblem', () => {
    expect(comp.currentProblem).toBeDefined('it should exist');
    expect(comp.currentProblem).toEqual(jasmine.any(ProblemComponent), 'it needs to be a ProblemComponent class');    
  });
});
