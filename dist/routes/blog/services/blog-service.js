var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-fetch-client", "aurelia-dependency-injection"], function (require, exports, aurelia_fetch_client_1, aurelia_dependency_injection_1) {
    "use strict";
    var BlogService = (function () {
        function BlogService(_http) {
            this._http = _http;
        }
        BlogService.prototype.getPosts = function () {
            return this._http.fetch('../../../../data/posts.json').then(function (response) {
                return response.text();
            }).then(function (data) {
                return JSON.parse(data);
            });
        };
        BlogService.prototype.getLatestPosts = function (nPosts) {
            return this._http.fetch('../../../../data/posts.json').then(function (response) {
                return response.text();
            }).then(function (data) {
                var posts = JSON.parse(data);
                return posts.slice(0, nPosts);
            });
        };
        BlogService.prototype.getPost = function (id) {
            return this._http.fetch('../../../../data/posts.json').then(function (response) {
                return response.text();
            }).then(function (data) {
                var posts = JSON.parse(data);
                return posts.find(function (post) {
                    return post.id == id;
                });
            });
        };
        BlogService = __decorate([
            aurelia_dependency_injection_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
        ], BlogService);
        return BlogService;
    }());
    exports.BlogService = BlogService;
});

//# sourceMappingURL=blog-service.js.map
