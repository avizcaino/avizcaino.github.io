define(["require", "exports", 'i18next-xhr-backend', 'bootstrap', 'fetch'], function (require, exports, Backend) {
    "use strict";
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .developmentLogging().plugin('aurelia-i18n', function (instance) {
            instance.i18next.use(Backend);
            return instance.setup({
                backend: {
                    loadPath: '/locales/{{lng}}/{{ns}}.json',
                },
                lng: 'de',
                attributes: ['t', 'i18n'],
                fallbackLng: 'dev',
                debug: false
            });
        })
            .feature('core');
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=main.js.map
