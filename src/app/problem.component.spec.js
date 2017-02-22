"use strict";
var problem_component_1 = require('./problem.component');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
describe('ProblemComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [problem_component_1.ProblemComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(problem_component_1.ProblemComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should have a number1', function () {
        expect(comp.number1).toBeDefined('number1 needs to be defined');
    });
    it('should have a number2', function () {
        expect(comp.number2).toBeDefined('number2 needs to be defined');
    });
    it('should have a sum', function () {
        expect(comp.sum).toBeDefined('sum needs to be defined');
        expect(comp.sum).toBe(comp.number1 + comp.number2, 'sum should be the sum of number1 and number2');
    });
    it('should have a wrongSum1', function () {
        expect(comp.wrongSum1).toBeDefined('wrongSum1 should be defined');
        expect(comp.wrongSum1).toBe(comp.sum - 1, 'wrongSum1 should be the sum minus 1');
    });
    it('should have a wrongSum2', function () {
        expect(comp.wrongSum2).toBeDefined('wrongSum2 should be defined');
        expect(comp.wrongSum2).toBe(comp.sum + 1, 'wrongSum1 should be the sum plus 1');
    });
});
//# sourceMappingURL=problem.component.spec.js.map