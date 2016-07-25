/* */ 
global.IntlPolyfill = require('./lib/core');
require('@empty');
if (!global.Intl) {
  global.Intl = global.IntlPolyfill;
  global.IntlPolyfill.__applyLocaleSensitivePrototypes();
}
module.exports = global.IntlPolyfill;
