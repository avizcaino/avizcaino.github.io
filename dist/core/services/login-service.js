var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-dependency-injection", "aurelia-fetch-client"], function (require, exports, aurelia_dependency_injection_1, aurelia_fetch_client_1) {
    "use strict";
    var LoginService = (function () {
        function LoginService(_http) {
            this._http = _http;
        }
        LoginService.prototype.validateCredentials = function (credentials) {
            return this._http.fetch('../../../data/credentials.json').then(function (response) {
                return response.text();
            }).then(function (data) {
                var validCredentials = false;
                var parsedData = JSON.parse(data);
                for (var i = 0; i < parsedData.length; i++) {
                    if (parsedData[i].username == credentials.username && parsedData[i].password == credentials.password) {
                        validCredentials = true;
                        break;
                    }
                }
                return validCredentials;
            });
        };
        LoginService = __decorate([
            aurelia_dependency_injection_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
        ], LoginService);
        return LoginService;
    }());
    exports.LoginService = LoginService;
});

//# sourceMappingURL=login-service.js.map
