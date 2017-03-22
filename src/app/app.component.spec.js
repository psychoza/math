"use strict";
var app_component_1 = require('./app.component');
var problem_component_1 = require('./problem.component');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
describe('AppComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_component_1.AppComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should have expected <h1> text', function () {
        fixture.detectChanges();
        var h1 = de.nativeElement;
        expect(h1.innerText).toMatch(/tristan/i); //,'<h1> should say something about "Jesse"');
    });
    it('should have a score', function () {
        expect(comp.score).toBeDefined('score needs to be defined');
    });
    it('should have a currentProblem', function () {
        expect(comp.currentProblem).toBeDefined('it should exist');
        expect(comp.currentProblem).toEqual(jasmine.any(problem_component_1.ProblemComponent), 'it needs to be a ProblemComponent class');
    });
});
//# sourceMappingURL=app.component.spec.js.map