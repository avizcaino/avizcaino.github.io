var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "../services/blog-service", "aurelia-dependency-injection", "aurelia-router"], function (require, exports, blog_service_1, aurelia_dependency_injection_1, aurelia_router_1) {
    "use strict";
    var Post = (function () {
        function Post(_blogService, _router) {
            this._blogService = _blogService;
            this._router = _router;
        }
        Post.prototype.activate = function (params) {
            var _this = this;
            return this._blogService.getPost(params.id).then(function (post) {
                _this.post = post;
            });
        };
        Post = __decorate([
            aurelia_dependency_injection_1.autoinject, 
            __metadata('design:paramtypes', [blog_service_1.BlogService, aurelia_router_1.Router])
        ], Post);
        return Post;
    }());
    exports.Post = Post;
});

//# sourceMappingURL=post.js.map
