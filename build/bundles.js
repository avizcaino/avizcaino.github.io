module.exports = {
  "bundles": {
    "dist/app-bundle": {
      "includes": [
        "[**/*.js]",
        "**/*.html!text",
        "**/*.css!text"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": true,
        "rev": false
      }
    },
    "dist/aurelia-bundle": {
      "includes": [
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-fetch-client",
        "aurelia-router",
        "aurelia-animator-css",
        "aurelia-templating-binding",
        "aurelia-polyfills",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-loader-default",
        "aurelia-history-browser",
        "aurelia-i18n",
        "aurelia-logging-console",
        "bluebird",
        "bootstrap",
        "bootstrap/css/bootstrap.css!text",
        "fetch",
        "font-awesome/css/font-awesome.min.css!text",
        "i18next-xhr-backend",
        "i18next",
        "intl",
        "moment",
        "jquery"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": false,
        "rev": false
      }
    }
  }
};
