app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
	  when('/initial', { templateUrl: 'html/list.php', controller: 'baseController'}).
      when('/create', { templateUrl: 'html/create.php', controller: 'baseController'}).
      when('/delete', { templateUrl: 'html/list.php', controller: 'baseController'}).
      otherwise({
        redirectTo: '/initial'
      });
  }
]);

