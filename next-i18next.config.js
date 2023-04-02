module.exports = {
  i18n: {
    defaultLocale: 'han',
    locales: ['han', 'en']
  },
  localePath:
    typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales'
};
