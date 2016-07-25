var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-dependency-injection", "aurelia-router", "aurelia-templating", "../command/command"], function (require, exports, aurelia_dependency_injection_1, aurelia_router_1, aurelia_templating_1, command_1) {
    "use strict";
    var NavBar = (function () {
        function NavBar(_element) {
            this._element = _element;
            this.navigateToCommand = new command_1.DelegateCommand(this.navigateTo.bind(this));
        }
        NavBar.prototype.navigateTo = function (route) {
            this.router.navigate(route);
        };
        __decorate([
            aurelia_templating_1.bindable, 
            __metadata('design:type', aurelia_router_1.Router)
        ], NavBar.prototype, "router", void 0);
        NavBar = __decorate([
            aurelia_dependency_injection_1.autoinject, 
            __metadata('design:paramtypes', [Element])
        ], NavBar);
        return NavBar;
    }());
    exports.NavBar = NavBar;
});

//# sourceMappingURL=nav-bar.js.map
