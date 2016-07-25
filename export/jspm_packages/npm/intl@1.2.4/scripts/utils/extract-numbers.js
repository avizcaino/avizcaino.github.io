/* */ 
let getParentLocale = require('./locales').getParentLocale;
let hasNumbersFields = require('./locales').hasNumbersFields;
let normalizeLocale = require('./locales').normalizeLocale;
module.exports = function extractNumbersFields(locales) {
  let cache = {};
  function getNumbers(locale) {
    let numbers = cache[locale];
    if (numbers) {
      return numbers;
    }
    if (hasNumbersFields(locale)) {
      numbers = cache[locale] = loadNumbers(locale);
      return numbers;
    }
  }
  function findLocaleWithNumbersFields(locale) {
    if (locale === 'root') {
      return 'root';
    }
    if (hasNumbersFields(locale)) {
      return locale;
    }
    return findLocaleWithNumbersFields(getParentLocale(locale));
  }
  return locales.reduce((numbers, locale) => {
    locale = normalizeLocale(locale);
    let resolvedLocale = findLocaleWithNumbersFields(locale);
    numbers[locale] = {numbers: getNumbers(resolvedLocale)};
    return numbers;
  }, {});
};
function loadNumbers(locale) {
  return Object.assign(require('cldr-numbers-full/main/' + locale + '/numbers.json').main[locale].numbers, require('cldr-numbers-full/main/' + locale + '/currencies.json').main[locale].numbers);
}
