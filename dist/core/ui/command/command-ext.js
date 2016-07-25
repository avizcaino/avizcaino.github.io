var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework'], function (require, exports, aurelia_framework_1) {
    "use strict";
    var CommandExtension = (function () {
        function CommandExtension(_element) {
            this._element = _element;
            this.parameter = null;
            this.command = null;
            this.eventName = 'click';
            this.deferred = false;
            this.deferralInterval = 25;
            this.deferredToParameterChanged = false;
            this.cancelBubble = true;
            this._isAttached = false;
            this._parameterChangedDeferralPending = false;
            this._executeCommandHandler = this.executeCommand.bind(this);
        }
        CommandExtension.prototype.attached = function () {
            this._element.addEventListener(this.eventName, this._executeCommandHandler);
            this.updateElementDisabled();
            this._isAttached = true;
        };
        CommandExtension.prototype.detached = function () {
            if (this.command != null) {
                this._element.removeEventListener(this.eventName, this._executeCommandHandler);
            }
            if (this._invalidateCanExecuteSubscription)
                this._invalidateCanExecuteSubscription.dispose();
        };
        CommandExtension.prototype.commandChanged = function (newValue) {
            var _this = this;
            if (this._isAttached) {
                this.updateElementDisabled();
            }
            if (this._invalidateCanExecuteSubscription)
                this._invalidateCanExecuteSubscription.dispose();
            this._invalidateCanExecuteSubscription = this.command ? this.command.subscribeToCanExecuteChanged(function () { return _this.updateElementDisabled(); }) : null;
        };
        CommandExtension.prototype.parameterChanged = function (newValue) {
            if (this._isAttached) {
                this.updateElementDisabled();
                if (this._parameterChangedDeferralPending) {
                    this._parameterChangedDeferralPending = false;
                    this.executeCommandInner();
                }
            }
        };
        CommandExtension.prototype.updateElementDisabled = function () {
            var _this = this;
            if (this.deferred) {
                this.defer(function () { return _this.updateElementDisabledInner(); });
            }
            else {
                this.updateElementDisabledInner();
            }
        };
        CommandExtension.prototype.updateElementDisabledInner = function () {
            var canExecuteCommand = this.command != null && this.command.canExecute(this.parameter);
            this._element.classList.remove("disabled");
            if (!canExecuteCommand)
                this._element.classList.add("disabled");
            this._element['disabled'] = !canExecuteCommand;
        };
        CommandExtension.prototype.executeCommand = function (evt) {
            var _this = this;
            this.cancelEventPropagation(evt);
            if (this.deferred)
                this.defer(function () { return _this.executeCommandInner(); });
            if (this.deferredToParameterChanged)
                this._parameterChangedDeferralPending = true;
            else if (!this.deferredToParameterChanged)
                this.executeCommandInner();
        };
        CommandExtension.prototype.cancelEventPropagation = function (evt) {
            if (this.cancelBubble && evt) {
                if (evt.stopPropagation)
                    evt.stopPropagation();
                evt.cancelBubble = true;
            }
        };
        CommandExtension.prototype.defer = function (callback) {
            var handle = setTimeout(function () {
                clearTimeout(handle);
                callback();
            }, this.deferralInterval);
        };
        CommandExtension.prototype.executeCommandInner = function () {
            if (this.command != null && this.command.canExecute(this.parameter))
                this.command.execute(this.parameter);
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], CommandExtension.prototype, "parameter", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Object)
        ], CommandExtension.prototype, "command", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', String)
        ], CommandExtension.prototype, "eventName", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], CommandExtension.prototype, "deferred", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Number)
        ], CommandExtension.prototype, "deferralInterval", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], CommandExtension.prototype, "deferredToParameterChanged", void 0);
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', Boolean)
        ], CommandExtension.prototype, "cancelBubble", void 0);
        CommandExtension = __decorate([
            aurelia_framework_1.autoinject,
            aurelia_framework_1.customAttribute('cmd'), 
            __metadata('design:paramtypes', [Element])
        ], CommandExtension);
        return CommandExtension;
    }());
    exports.CommandExtension = CommandExtension;
});

//# sourceMappingURL=command-ext.js.map
