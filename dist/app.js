define(["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Alex Vizcaino';
            config.map([
                { route: ['', 'home'], name: 'home', moduleId: 'routes/home/views/main', nav: true, title: 'Welcome' },
                { route: 'photography', name: 'photography', moduleId: 'routes/photography/views/main', nav: true, title: 'Photography' },
                { route: 'blog', name: 'blog', moduleId: 'routes/blog/views/main', nav: true, title: 'Blog' },
                { route: 'about', name: 'about', moduleId: 'routes/about/views/main', nav: true, title: 'About' },
                { route: 'editor', name: 'editor', moduleId: 'routes/editor/views/main', nav: false, title: 'Editor' }
            ]);
            this.router = router;
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=app.js.map
