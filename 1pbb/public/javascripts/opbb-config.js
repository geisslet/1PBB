angular.module('opbb')
          .config(languageConfig);

languageConfig.$inject = ['$translateProvider'];
function languageConfig($translateProvider){

  
  // deutsche Sprache
  $translateProvider.translations('de_DE', {
    APP_HEADLINE:  'One Person Business Billing',
    NAV_HOME:      'Zur Startseite',
    NAV_ABOUT:     'Über',
    APP_TEXT:      'OPBB - One Person Business Billing',
    ARTICLES:      'Artikelverwaltung',
    CUSTOMERS:     'Kunden',
    OFFERS:        'Angebote',
    BILLS:         'Rechungen',
    STATISTICS:    'Statistik',
    LANGUAGE_SWITCH: 'language'
  });

  // englische Sprache
  $translateProvider.translations('en_US', {
    APP_HEADLINE:  'One Person Business Billing',
    NAV_HOME:      'Start',
    NAV_ABOUT:     'About',
    APP_TEXT:      'Some text about the awesome AngularJS app.',
    ARTICLES:      'articles',
    CUSTOMERS:     'customers',
    OFFERS:        'offers',
    BILLS:         'bills',
    STATISTICS:    'statistics',
    LANGUAGE_SWITCH: 'Sprache'
  });
  
  //sanitize
  $translateProvider.useSanitizeValueStrategy('escape');
  $translateProvider.preferredLanguage('de_DE');

  //$translateProvider.determinePreferredLanguage();
}