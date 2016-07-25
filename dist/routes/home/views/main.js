var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-dependency-injection", "../../blog/services/blog-service"], function (require, exports, aurelia_dependency_injection_1, blog_service_1) {
    "use strict";
    var Home = (function () {
        function Home(_blogService) {
            this._blogService = _blogService;
        }
        Home.prototype.activate = function () {
            var _this = this;
            return this._blogService.getLatestPosts(3).then(function (posts) {
                _this.latestPosts = posts;
            });
        };
        Home = __decorate([
            aurelia_dependency_injection_1.autoinject, 
            __metadata('design:paramtypes', [blog_service_1.BlogService])
        ], Home);
        return Home;
    }());
    exports.Home = Home;
});

//# sourceMappingURL=main.js.map
