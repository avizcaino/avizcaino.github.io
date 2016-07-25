var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "../services/blog-service", "aurelia-dependency-injection"], function (require, exports, blog_service_1, aurelia_dependency_injection_1) {
    "use strict";
    var Blog = (function () {
        function Blog(_blogService) {
            this._blogService = _blogService;
        }
        Blog.prototype.activate = function () {
            var _this = this;
            return this._blogService.getPosts().then(function (posts) {
                _this.posts = posts;
            });
        };
        Blog = __decorate([
            aurelia_dependency_injection_1.autoinject, 
            __metadata('design:paramtypes', [blog_service_1.BlogService])
        ], Blog);
        return Blog;
    }());
    exports.Blog = Blog;
});

//# sourceMappingURL=blog.js.map
