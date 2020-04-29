const NextI18Next = require('next-i18next').default;
// eslint-disable-next-line no-unused-vars
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig;

module.exports = new NextI18Next({
  defaultLanguage: 'fr',
  otherLanguages: ['en'],
  localeSubpaths: {
    fr: 'fr',
    en: 'en',
  },
  detection: {
    lookupCookie: 'next-i18next',
    order: ['cookie', 'querystring', 'localStorage', 'path', 'subdomain'],
    caches: ['cookie'],
  },
});
