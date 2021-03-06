"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ProblemComponent = (function () {
    function ProblemComponent() {
        this.generateProblem = function () {
            this.number1 = this.generateRandomNumber();
            this.number2 = this.generateRandomNumber();
            this.sum = this.number1 + this.number2;
            this.wrongSum1 = this.sum - 1;
            this.wrongSum2 = this.sum + 1;
        };
        this.generateRandomNumber = function () {
            return Math.floor(Math.random() * 6);
        };
        this.generateProblem();
    }
    ;
    ProblemComponent = __decorate([
        core_1.Component({
            selector: 'problem',
            template: "<h1>Hello {{name}}</h1>",
        }), 
        __metadata('design:paramtypes', [])
    ], ProblemComponent);
    return ProblemComponent;
}());
exports.ProblemComponent = ProblemComponent;
//# sourceMappingURL=problem.component.js.map