var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-dependency-injection", "aurelia-event-aggregator", "../../../core/events"], function (require, exports, aurelia_dependency_injection_1, aurelia_event_aggregator_1, events_1) {
    "use strict";
    var Main = (function () {
        function Main(_ea) {
            this._ea = _ea;
            this._ea.subscribe(events_1.Events.navigateToPost, this.navigateTo.bind(this));
        }
        Main.prototype.configureRouter = function (config, router) {
            config.map([
                { route: ['', 'blog'], name: 'blog', moduleId: './blog', nav: false, title: '' },
                { route: 'post/:id', name: 'post', moduleId: './post', nav: false, title: '' }
            ]);
            this.router = router;
        };
        Main.prototype.navigateTo = function (post) {
            this.router.navigateToRoute('post', { id: post.id });
        };
        Main = __decorate([
            aurelia_dependency_injection_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_event_aggregator_1.EventAggregator])
        ], Main);
        return Main;
    }());
    exports.Main = Main;
});

//# sourceMappingURL=main.js.map
