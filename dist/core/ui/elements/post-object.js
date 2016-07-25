var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-templating", "aurelia-dependency-injection"], function (require, exports, aurelia_templating_1, aurelia_dependency_injection_1) {
    "use strict";
    var PostObject = (function () {
        function PostObject() {
        }
        __decorate([
            aurelia_templating_1.bindable, 
            __metadata('design:type', Object)
        ], PostObject.prototype, "post", void 0);
        PostObject = __decorate([
            aurelia_dependency_injection_1.autoinject, 
            __metadata('design:paramtypes', [])
        ], PostObject);
        return PostObject;
    }());
    exports.PostObject = PostObject;
});

//# sourceMappingURL=post-object.js.map
