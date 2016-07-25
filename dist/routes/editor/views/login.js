var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "../../../core/ui/command/command", "aurelia-dependency-injection", "aurelia-binding", "../../../core/services/login-service", "aurelia-router"], function (require, exports, command_1, aurelia_dependency_injection_1, aurelia_binding_1, login_service_1, aurelia_router_1) {
    "use strict";
    var Login = (function () {
        function Login(_ol, _loginService, _router) {
            this._ol = _ol;
            this._loginService = _loginService;
            this._router = _router;
            this.accessCommand = new command_1.DelegateCommand(this.access.bind(this), this.canExecuteAccess.bind(this));
            this._ol.getObserver(this, 'username').subscribe(this.inputChange.bind(this));
            this._ol.getObserver(this, 'password').subscribe(this.inputChange.bind(this));
        }
        Login.prototype.inputChange = function (newInputValue) {
            this.accessCommand.invalidateCanExecute();
        };
        Login.prototype.access = function () {
            var _this = this;
            this._loginService.validateCredentials({ username: this.username, password: this.password }).then(function (validLogin) {
                if (validLogin)
                    _this._router.navigate('admin');
                else
                    _this.loginError = 'message--login-error';
            });
        };
        Login.prototype.canExecuteAccess = function () {
            return this.username != null && this.password != null && this.username != '' && this.password != '';
        };
        Login = __decorate([
            aurelia_dependency_injection_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_binding_1.ObserverLocator, login_service_1.LoginService, aurelia_router_1.Router])
        ], Login);
        return Login;
    }());
    exports.Login = Login;
});

//# sourceMappingURL=login.js.map
