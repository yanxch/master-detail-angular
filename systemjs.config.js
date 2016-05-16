(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    'rxjs':                       'node_modules/rxjs',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular':                   'node_modules/@angular',
    '@angular2-material/core':    '/node_modules/@angular2-material/core',
    '@angular2-material/toolbar': '/node_modules/@angular2-material/toolbar',
    '@angular2-material/card' :   '/node_modules/@angular2-material/card',
    '@angular2-material/sidenav': '/node_modules/@angular2-material/sidenav',
    '@angular2-material/list':    '/node_modules/@angular2-material/list',
    '@angular2-material/button':  '/node_modules/@angular2-material/button'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    'node_modules/@angular2-material/core' : { defaultExtension: 'js'},
    'node_modules/@angular2-material/toolbar': { main: 'toolbar.js', defaultExtension: 'js' },
    'node_modules/@angular2-material/card': { main: 'card.js', defaultExtension: 'js' },
    'node_modules/@angular2-material/sidenav': { main: 'sidenav.js', defaultExtension: 'js' },
    'node_modules/@angular2-material/list': { main: 'list.js', defaultExtension: 'js' },
    'node_modules/@angular2-material/button': { main: 'button.js', defaultExtension: 'js' }
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
