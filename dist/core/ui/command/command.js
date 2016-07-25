var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    var DelegateCommandBase = (function () {
        function DelegateCommandBase() {
            this._subscriptions = [];
        }
        DelegateCommandBase.prototype.execute = function (argument) { };
        DelegateCommandBase.prototype.canExecute = function (argument) { };
        DelegateCommandBase.prototype.invalidateCanExecute = function () {
            for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
                var subscription = _a[_i];
                subscription();
            }
        };
        DelegateCommandBase.prototype.subscribeToCanExecuteChanged = function (callback) {
            this._subscriptions.push(callback);
            return {
                dispose: function () {
                }
            };
        };
        DelegateCommandBase.prototype.unsubscribe = function (callback) {
            var index = this._subscriptions.indexOf(callback);
            if (index > -1)
                this._subscriptions.splice(index, 1);
        };
        return DelegateCommandBase;
    }());
    exports.DelegateCommandBase = DelegateCommandBase;
    var DelegateCommandVoid = (function (_super) {
        __extends(DelegateCommandVoid, _super);
        function DelegateCommandVoid(execute, canExecute) {
            _super.call(this);
            this._execute = execute;
            this._canExecute = canExecute;
        }
        DelegateCommandVoid.prototype.execute = function () {
            if (this.canExecute())
                this._execute();
        };
        DelegateCommandVoid.prototype.canExecute = function () {
            return this._canExecute == null ? true : this._canExecute();
        };
        return DelegateCommandVoid;
    }(DelegateCommandBase));
    exports.DelegateCommandVoid = DelegateCommandVoid;
    var DelegateCommand = (function (_super) {
        __extends(DelegateCommand, _super);
        function DelegateCommand(execute, canExecute) {
            _super.call(this);
            this._execute = execute;
            this._canExecute = canExecute;
        }
        DelegateCommand.prototype.execute = function (arg) {
            if (this.canExecute(arg))
                this._execute(arg);
        };
        DelegateCommand.prototype.canExecute = function (arg) {
            return this._canExecute == null ? true : this._canExecute(arg);
        };
        return DelegateCommand;
    }(DelegateCommandBase));
    exports.DelegateCommand = DelegateCommand;
});

//# sourceMappingURL=command.js.map
