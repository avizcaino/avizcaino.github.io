define(["require", "exports"], function (require, exports) {
    "use strict";
    var Editor = (function () {
        function Editor() {
        }
        Editor.prototype.configureRouter = function (config, router) {
            config.map([
                { route: ['', 'login'], name: 'login', moduleId: './login', nav: false, title: 'Login' },
                { route: 'admin', name: 'admin', moduleId: './admin', nav: false, title: 'Admin' }
            ]);
            this.router = router;
        };
        return Editor;
    }());
    exports.Editor = Editor;
});

//# sourceMappingURL=main.js.map
