<!DOCTYPE html>
<html ng-app="app">
<head>
  <meta charset="utf-8" />
  <title>Opba Angular</title>
  <script data-require="angular.js@1.2.x" src="http://code.angularjs.org/1.2.4/angular.js" data-semver="1.2.1"></script>
  <script data-require="angular.js@1.2.x" src="http://code.angularjs.org/1.2.4/angular-route.js" ></script>  
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script>
  
  <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-theme.min.css">
  <script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
  
  <script src="app.js"></script>
  <script src="services/appService.js"></script>
  <script src="controllers/baseController.js"></script>
  
  <script src="controllers/router.js"></script>
  
</head> 

	<body ng-controller="baseController">
		<ng-view />
	</body>
</html>
